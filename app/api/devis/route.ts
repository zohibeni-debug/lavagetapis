import { NextResponse } from "next/server";

import { PHONE_DISPLAY, TYPE_LABELS } from "@/lib/content";
import {
  clientIp,
  countRecentSubmissions,
  hashIp,
  insertLead,
  recordSubmissionHit,
} from "@/lib/leads";
import { sendLeadEmail, type LeadRow } from "@/lib/mailer";
import {
  isHoneypotFilled,
  isValidEmail,
  isValidPhone,
  isValidPostalCode,
  readPhotos,
  text,
} from "@/lib/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = 5;
const RATE_WINDOW_MINUTES = 60;

const FAILURE = `Votre demande n'a pas pu être envoyée. Appelez-nous au ${PHONE_DISPLAY}.`;

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: FAILURE }, { status: 400 });
  }

  // Champ leurre rempli : envoi automatisé, on répond « succès » sans rien faire.
  if (isHoneypotFilled(form)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(form, "name", 120);
  const phone = text(form, "tel", 30);
  const postalCode = text(form, "cp", 10);
  const email = text(form, "email", 160);
  const consent = text(form, "consent", 10);
  const carpetType = text(form, "type", 40);
  const dimensions = text(form, "dims", 60);
  const callbackSlot = text(form, "when", 60);
  const message = text(form, "msg", 2000);
  const estimate = text(form, "recap", 300);
  const problems = form
    .getAll("pb")
    .filter((value): value is string => typeof value === "string")
    .join(", ")
    .slice(0, 300);

  if (!name || !isValidPhone(phone) || !isValidPostalCode(postalCode) || !consent) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Merci d'indiquer votre nom, un téléphone valide, un code postal à 5 chiffres et d'accepter la transmission.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "L'adresse e-mail indiquée n'est pas valide." },
      { status: 400 },
    );
  }

  let photos;
  try {
    photos = await readPhotos(form);
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : FAILURE },
      { status: 400 },
    );
  }

  const ipHash = hashIp(clientIp(request));

  try {
    const recent = await countRecentSubmissions(ipHash, RATE_WINDOW_MINUTES);
    if (recent >= RATE_LIMIT) {
      return NextResponse.json(
        {
          ok: false,
          message: `Trop de demandes envoyées depuis cette connexion. Réessayez plus tard ou appelez le ${PHONE_DISPLAY}.`,
        },
        { status: 429 },
      );
    }
    await recordSubmissionHit(ipHash);
  } catch (error) {
    // La protection anti-spam ne doit pas empêcher une demande légitime d'aboutir.
    console.error("[api/devis] limite d'envoi indisponible", error);
  }

  const typeLabel = TYPE_LABELS[carpetType] ?? carpetType ?? "Type non précisé";

  const rows: LeadRow[] = [
    ["Source", "Formulaire de devis — lavagetapis.fr"],
    ["Nom", name],
    ["Téléphone", phone],
    ["E-mail", email || "non communiqué"],
    ["Code postal", postalCode],
    ["Type de tapis", typeLabel],
    ["Dimensions", dimensions || "non précisées"],
    ["Problèmes à traiter", problems || "non précisés"],
    ["Créneau de rappel", callbackSlot || "dès que possible"],
    ["Précisions", message || "—"],
    ["Estimation du simulateur", estimate || "—"],
    ["Photos", photos.length ? `${photos.length} pièce(s) jointe(s)` : "aucune"],
  ];

  let leadId: number;
  try {
    leadId = await insertLead({
      source: "devis",
      carpetType: typeLabel,
      dimensions: dimensions || null,
      problems: problems || null,
      postalCode,
      name,
      phone,
      email: email || null,
      callbackSlot: callbackSlot || null,
      message: message || null,
      photos: photos.map((photo) => photo.name),
      ipHash,
    });
  } catch (error) {
    console.error("[api/devis] enregistrement impossible", error);
    return NextResponse.json({ ok: false, message: FAILURE }, { status: 500 });
  }

  try {
    await sendLeadEmail({
      subject: `Demande de devis — ${typeLabel}${dimensions ? ` ${dimensions}` : ""} (${postalCode})`,
      rows,
      replyTo: email || undefined,
      photos,
    });
  } catch (error) {
    // La demande est enregistrée en base : on le dit clairement au visiteur.
    console.error("[api/devis] envoi de l'e-mail impossible", error);
    return NextResponse.json(
      {
        ok: false,
        message: `Votre demande a bien été enregistrée, mais l'e-mail de confirmation n'a pas pu partir. Appelez le ${PHONE_DISPLAY} pour aller plus vite.`,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: leadId });
}
