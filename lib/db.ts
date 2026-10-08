import { Pool } from "pg";

let pool: Pool | undefined;

/**
 * Pool Postgres unique, réutilisé entre les invocations d'une même instance.
 * Neon ajoute des paramètres d'URL que node-postgres ne comprend pas :
 * on ne conserve que la chaîne utile et on active TLS explicitement.
 */
export function getPool(): Pool {
  if (pool) return pool;

  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL n'est pas configurée");

  const parsed = new URL(url);
  parsed.search = "";

  pool = new Pool({
    connectionString: parsed.toString(),
    ssl: { rejectUnauthorized: false },
    max: 3,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 10_000,
  });

  return pool;
}
