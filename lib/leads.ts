import { createHash } from "node:crypto";

import { getPool } from "./db";

export type LeadSource = "devis" | "partenaire";

export type Lead = {
  source: LeadSource;
  carpetType: string | null;
  dimensions: string | null;
  problems: string | null;
  postalCode: string | null;
  name: string;
  phone: string;
  email: string | null;
  callbackSlot: string | null;
  message: string | null;
  photos: string[];
  ipHash: string;
};

/** Adresse IP de l'appelant, telle que transmise par le proxy Vercel. */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "0.0.0.0";
}

/** Seule l'empreinte de l'IP est conservée : jamais l'adresse en clair. */
export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT ?? "lavagetapis";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

/** Nombre d'envois déjà effectués par cette IP dans la fenêtre glissante. */
export async function countRecentSubmissions(
  ipHash: string,
  windowMinutes: number,
): Promise<number> {
  const { rows } = await getPool().query<{ n: number }>(
    `SELECT count(*)::int AS n
       FROM submit_hits
      WHERE ip_hash = $1
        AND created_at > now() - make_interval(mins => $2::int)`,
    [ipHash, windowMinutes],
  );
  return rows[0]?.n ?? 0;
}

export async function recordSubmissionHit(ipHash: string): Promise<void> {
  await getPool().query("INSERT INTO submit_hits (ip_hash) VALUES ($1)", [ipHash]);
}

export async function insertLead(lead: Lead): Promise<number> {
  const { rows } = await getPool().query<{ id: string }>(
    `INSERT INTO leads
       (source, carpet_type, dimensions, problems, postal_code, name, phone,
        email, callback_slot, message, photos, ip_hash)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb, $12)
     RETURNING id`,
    [
      lead.source,
      lead.carpetType,
      lead.dimensions,
      lead.problems,
      lead.postalCode,
      lead.name,
      lead.phone,
      lead.email,
      lead.callbackSlot,
      lead.message,
      JSON.stringify(lead.photos),
      lead.ipHash,
    ],
  );
  return Number(rows[0].id);
}
