# lavagetapis.fr

Site vitrine de **lavagetapis.fr**, service de mise en relation avec des ateliers de lavage de
tapis en Île-de-France. Le rendu est celui de la maquette validée, portée dans Next.js (App
Router) avec un rendu côté serveur : **tout le texte est présent dans le HTML source**.

## Pile technique

| Élément | Choix |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, TypeScript) |
| Rendu | Statique côté serveur pour les pages, routes API dynamiques |
| Base de données | PostgreSQL (Neon) via `pg` |
| E-mails | Resend |
| Hébergement | Vercel, fonctions en `cdg1` (Paris) |
| Style | `app/globals.css`, CSS de la maquette repris tel quel |

## Structure

```
app/
  layout.tsx              métadonnées (title, description, canonical, Open Graph), polices, GTM
  page.tsx                composition de la page d'accueil + JSON-LD schema.org
  globals.css             CSS de la maquette, puis ajouts pour les pages légales
  sitemap.ts, robots.ts   /sitemap.xml et /robots.txt
  icon.svg                favicon (logo de la marque)
  mentions-legales/       page mentions légales et CGU
  confidentialite/        politique de confidentialité (RGPD)
  api/devis/              POST : demande de devis
  api/partenaire/         POST : demande d'atelier partenaire
components/               une section de la page = un composant
lib/
  content.ts              types de tapis et 36 communes desservies
  db.ts, leads.ts         pool Postgres, insertion des demandes, limite d'envoi
  validate.ts             validation et lecture des photos
  mailer.ts               mise en forme et envoi de l'e-mail via Resend
  jsonld.ts               données structurées de la maquette
public/img, public/video, public/logo   médias, chemins inchangés
```

## Variables d'environnement

Copiez `.env.example` vers `.env.local` en développement, et renseignez-les dans
**Vercel → Project → Settings → Environment Variables** en production :

| Variable | Rôle |
| --- | --- |
| `DATABASE_URL` | chaîne de connexion Postgres (Neon) |
| `RESEND_API_KEY` | clé API Resend, requise pour l'envoi des e-mails |
| `LEADS_EMAIL` | adresse qui reçoit les demandes |
| `LEADS_FROM` | expéditeur affiché, sur un domaine vérifié dans Resend |
| `NEXT_PUBLIC_GTM_ID` | conteneur Google Tag Manager ; vide = script non chargé |
| `IP_HASH_SALT` | sel utilisé pour hacher l'IP avant stockage |

## Développement

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # vérifie les types et produit la version de production
npm start       # sert la version de production
```

## Formulaires

Les deux formulaires de la maquette envoient réellement leurs données :

- `POST /api/devis` — validation serveur (nom, téléphone, code postal à 5 chiffres, consentement),
  champ leurre anti-spam, limite de **5 envois par heure et par IP**, enregistrement dans la table
  `leads`, e-mail à `LEADS_EMAIL` avec les **photos en pièce jointe** (5 photos maximum, 5 Mo
  maximum chacune).
- `POST /api/partenaire` — même protection ; enregistre l'atelier et son secteur couvert.

Codes de réponse : `200` succès, `400` données invalides, `429` limite atteinte, `500` échec
d'enregistrement ou d'envoi. Le message de confirmation ne s'affiche qu'après une réponse `200` ;
sinon le visiteur voit une erreur avec le numéro **07 62 87 07 07**.

## Suivi des conversions

Quatre événements sont poussés dans `window.dataLayer` : `devis_envoye`, `partenaire_envoye`,
`clic_appel`, `clic_whatsapp`. Ils sont exploitables dans Google Tag Manager dès que
`NEXT_PUBLIC_GTM_ID` est renseigné ; tant qu'il est vide, le script GTM n'est pas chargé mais les
événements restent disponibles pour un déclencheur personnalisé.

## Base de données

```sql
CREATE TABLE leads (
  id            serial PRIMARY KEY,
  created_at    timestamptz NOT NULL DEFAULT now(),
  source        text NOT NULL,
  carpet_type   text,
  dimensions    text,
  problems      text,
  postal_code   text,
  name          text NOT NULL,
  phone         text NOT NULL,
  email         text,
  callback_slot text,
  message       text,
  photos        jsonb NOT NULL DEFAULT '[]'::jsonb,
  ip_hash       text
);

CREATE TABLE submit_hits (
  id         serial PRIMARY KEY,
  ip_hash    text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX submit_hits_ip_created_idx ON submit_hits (ip_hash, created_at DESC);
```

## Déploiement

Le projet est relié au dépôt GitHub ; chaque push sur `main` déclenche un déploiement de
production Vercel. Les domaines `lavagetapis.fr` (apex) et `www.lavagetapis.fr` (redirection 301
vers l'apex) sont rattachés au projet. Les enregistrements DNS à créer chez le registrar sont
`A @ → 76.76.21.21` et `CNAME www → cname.vercel-dns.com`.