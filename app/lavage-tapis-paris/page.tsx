import HubPageView from "@/components/hub-page-view";
import { requireHub } from "@/lib/local-pages";
import { localMetadata } from "@/lib/local-pages/metadata";

const hub = requireHub("lavage-tapis-paris");

export const metadata = localMetadata({
  title: hub.title,
  description: hub.description,
  slug: hub.slug,
  image: "/img/hero-lavage-tapis-900.jpg",
});

export default function Page() {
  return <HubPageView hub={hub} />;
}