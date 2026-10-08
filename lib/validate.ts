export const MAX_PHOTOS = 5;
export const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

export type Photo = { name: string; content: Buffer };

/** Champ texte nettoyé et borné. */
export function text(form: FormData, key: string, maxLength = 500): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

/**
 * Champ leurre : un visiteur ne le voit pas, un robot le remplit.
 * Sa présence signale un envoi automatisé.
 */
export function isHoneypotFilled(form: FormData): boolean {
  return text(form, "website", 100).length > 0;
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 20;
}

export function isValidPostalCode(value: string): boolean {
  return /^\d{5}$/.test(value);
}

export function isValidEmail(email: string): boolean {
  if (!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/**
 * Lit les photos jointes : 5 images au maximum, 5 Mo au maximum chacune.
 * Une image trop lourde interrompt l'envoi avec un message explicite.
 */
export async function readPhotos(form: FormData): Promise<Photo[]> {
  const files = form
    .getAll("photos")
    .filter((entry): entry is File => typeof entry === "object" && entry !== null && "arrayBuffer" in entry);

  if (files.length > MAX_PHOTOS) {
    throw new Error(`Merci de joindre ${MAX_PHOTOS} photos au maximum.`);
  }

  const photos: Photo[] = [];
  for (const file of files) {
    if (!file.size) continue;
    if (file.size > MAX_PHOTO_BYTES) {
      throw new Error(`La photo « ${file.name} » dépasse 5 Mo.`);
    }
    if (file.type && !file.type.startsWith("image/")) continue;
    photos.push({ name: file.name || "photo.jpg", content: Buffer.from(await file.arrayBuffer()) });
  }
  return photos;
}
