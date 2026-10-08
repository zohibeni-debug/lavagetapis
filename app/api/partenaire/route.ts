import { NextResponse } from "next/server";

import { PHONE_DISPLAY } from "@/lib/content";
import {
  clientIp,
  countRecentSubmissions,
  hashIp,
  insertLead,
  recordSubmissionHit,
} from "@/lib/leads";
import { sendLeadEmail, type LeadRow } from "@/lib/mailer";
import { isHoneypotFilled, isValidPhone, text } from "@/lib/validate";

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

  if (isHoneypotFilled(form)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(form, "name", 160);
  const sector = text(form, "city", 160);
  const phone = text(form, "tel", 30);

  if (!name || !sector || !isValidPhone(phone)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Merci d'indiquer le nom de l'atelier, votre secteur et un numéro de téléphone valide.",
      },
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
    console.error("[api/partenaire] limite d'envoi indisponible", error);
  }

  const rows: LeadRow[] = [
    ["Source", "Formulaire atelier partenaire — lavagetapis.fr"],
    ["Atelier", name],
    ["Secteur couvert", sector],
    ["Téléphone", phone],
  ];

  let leadId: number;
  try {
    leadId = await insertLead({
      source: "partenaire",
      carpetType: null,
      dimensions: null,
      problems: null,
      postalCode: sector,
      name,
      phone,
      email: null,
      callbackSlot: null,
      message: `Demande de partenariat — secteur couvert : ${sector}`,
      photos: [],
      ipHash,
    });
  } catch (error) {
    console.error("[api/partenaire] enregistrement impossible", error);
    return NextResponse.json({ ok: false, message: FAILURE }, { status: 500 });
  }

  try {
    await sendLeadEmail({
      subject: `Atelier partenaire — ${name} (${sector})`,
      rows,
    });
  } catch (error) {
    console.error("[api/partenaire] envoi de l'e-mail impossible", error);
    return NextResponse.json(
      {
        ok: false,
        message: `Votre demande a bien été enregistrée, mais l'e-mail n'a pas pu partir. Appelez le ${PHONE_DISPLAY}.`,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: leadId });
}