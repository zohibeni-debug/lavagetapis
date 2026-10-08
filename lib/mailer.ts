import { Resend } from "resend";

import type { Photo } from "./validate";

export type LeadRow = [label: string, value: string];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function leadRowsToHtml(rows: LeadRow[]): string {
  const cells = rows
    .map(
      ([label, value]) => `
        <tr>
          <th align="left" style="padding:6px 12px 6px 0;vertical-align:top;font:600 13px/1.5 Arial,Helvetica,sans-serif;color:#0e2a27;white-space:nowrap">${escapeHtml(
            label,
          )}</th>
          <td style="padding:6px 0;vertical-align:top;font:400 14px/1.5 Arial,Helvetica,sans-serif;color:#24413d">${escapeHtml(
            value,
          ).replace(/\n/g, "<br>")}</td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0;background:#ffffff">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
      <tr>
        <td align="center" style="padding:24px 16px">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;border-collapse:collapse">
            <tr>
              <td bgcolor="#00615b" style="background-color:#00615b;padding:16px 20px">
                <span style="font:700 18px/1.2 Arial,Helvetica,sans-serif;color:#ffffff">lavagetapis<i style="font-style:normal;color:#f9d140">.fr</i></span>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 20px 4px">
                <h1 style="margin:0 0 8px;font:700 18px/1.3 Arial,Helvetica,sans-serif;color:#0e2a27">Nouvelle demande reçue</h1>
                <p style="margin:0;font:400 13px/1.5 Arial,Helvetica,sans-serif;color:#48635f">Le détail de la demande est ci-dessous. Les photos éventuelles sont en pièce jointe.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 20px 24px">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%">
                  ${cells}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function leadRowsToText(rows: LeadRow[]): string {
  return rows.map(([label, value]) => `${label} : ${value}`).join("\n");
}

export type LeadEmail = {
  subject: string;
  rows: LeadRow[];
  replyTo?: string;
  photos?: Photo[];
};

/** Envoie la demande à l'adresse LEADS_EMAIL via Resend. */
export async function sendLeadEmail({
  subject,
  rows,
  replyTo,
  photos = [],
}: LeadEmail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_EMAIL;
  if (!apiKey) throw new Error("RESEND_API_KEY n'est pas configurée");
  if (!to) throw new Error("LEADS_EMAIL n'est pas configurée");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.LEADS_FROM || "lavagetapis.fr <devis@lavagetapis.fr>",
    to: [to],
    replyTo: replyTo || undefined,
    subject,
    html: leadRowsToHtml(rows),
    text: leadRowsToText(rows),
    attachments: photos.map((photo) => ({
      filename: photo.name,
      content: photo.content,
    })),
  });

  if (error) throw new Error(error.message);
}
