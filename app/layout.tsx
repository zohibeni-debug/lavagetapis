import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./globals.css";

// Métadonnées reprises telles quelles de la maquette : title, meta description,
// canonical et Open Graph passent simplement par l'API metadata de Next.js.
export const metadata: Metadata = {
  metadataBase: new URL("https://lavagetapis.fr"),
  title: "lavagetapis.fr",
  description:
    "Lavage de tapis en atelier avec enlèvement et livraison à domicile en Île-de-France. Persan, berbère, kilim, soie, shaggy : estimez le prix au m² et recevez un devis gratuit sous 24\u00a0h.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lavage de tapis avec enlèvement et livraison | lavagetapis.fr",
    description:
      "Estimez le prix du lavage de votre tapis et recevez un devis d'un atelier partenaire sous 24\u00a0h.",
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