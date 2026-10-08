import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // La maquette est servie telle quelle : aucun asset externe n'est réécrit.
  images: {
    // Les images du dossier /public sont servies par le CDN Vercel sans passer
    // par l'optimiseur : les dimensions et les srcset d'origine sont conservés
    // à l'identique pour un rendu strictement identique à la maquette.
    unoptimized: true,
  },
  async rewrites() {
    // Le favicon demandé par les navigateurs pointe sur le logo de la marque.
    return [{ source: "/favicon.ico", destination: "/logo/logo-lavagetapis.svg" }];
  },
};

export default nextConfig;
