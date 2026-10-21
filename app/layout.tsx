import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./globals.css";

// Métadonnées de l'accueil. Le titre et la description d'origine venaient de la
// maquette : « lavagetapis.fr » seul en titre, et 184 caractères de description,
// tronqués dans les résultats de recherche. Ils sont remplacés par des versions
// complètes et calibrées (titre de 56 caractères, description de 151).
export const metadata: Metadata = {
  metadataBase: new URL("https://lavagetapis.fr"),
  title: "Lavage de tapis à Paris et en Île-de-France · Devis 24 h",
  description:
    "Lavage de tapis en atelier à Paris et en Île-de-France : enlèvement et livraison à domicile, devis gratuit sous 24\u00a0h. Estimez le prix au m².",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "lavagetapis.fr",
    locale: "fr_FR",
    title: "Lavage de tapis à Paris et en Île-de-France · Devis 24 h",
    description:
      "Lavage de tapis en atelier avec enlèvement et livraison à domicile. Devis d'un atelier partenaire sous 24\u00a0h.",
    images: ["https://lavagetapis.fr/img/hero-lavage-tapis.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavage de tapis à Paris et en Île-de-France · Devis 24 h",
    description:
      "Lavage de tapis en atelier avec enlèvement et livraison à domicile. Devis d'un atelier partenaire sous 24\u00a0h.",
    images: ["https://lavagetapis.fr/img/hero-lavage-tapis.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..900&family=Figtree:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {gtmId ? (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});(function(w,d,s,l,i){var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
      </body>
    </html>
  );
}
