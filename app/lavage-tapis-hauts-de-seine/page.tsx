import HubPageView from "@/components/hub-page-view";
import { requireHub } from "@/lib/local-pages";
import { localMetadata } from "@/lib/local-pages/metadata";

const hub = requireHub("lavage-tapis-hauts-de-seine");

export const metadata = localMetadata({
  title: hub.title,
  description: hub.description,
  slug: hub.slug,
  image: "/img/hero-lavage-tapis.jpg",
});

export default function Page() {
  return <HubPageView hub={hub} />;
}
