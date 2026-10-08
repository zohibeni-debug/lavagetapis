import Atelier from "@/components/atelier";
import BeforeAfter from "@/components/before-after";
import CarpetTypes from "@/components/carpet-types";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import MobileCta from "@/components/mobile-cta";
import PhotoStrip from "@/components/photo-strip";
import Process from "@/components/process";
import Pros from "@/components/pros";
import QuoteForm from "@/components/quote-form";
import RugSymbol from "@/components/rug-symbol";
import Simulator from "@/components/simulator";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SiteScripts from "@/components/site-scripts";
import Stains from "@/components/stains";
import Zones from "@/components/zones";
import { jsonLd } from "@/lib/jsonld";

// Toute la page est rendue côté serveur : chaque texte de la maquette est
// présent dans le HTML source. L'interactivité est apportée par SiteScripts.
export default function HomePage() {
  return (
    <>
      <RugSymbol />
      <SiteHeader />
      <main id="top">
        <Hero />
        <PhotoStrip />
        <BeforeAfter />
        <Atelier />
        <Process />
        <CarpetTypes />
        <Stains />
        <Simulator />
        <Zones />
        <Pros />
        <Faq />
        <QuoteForm />
      </main>
      <SiteFooter />
      <MobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteScripts />
    </>
  );
}