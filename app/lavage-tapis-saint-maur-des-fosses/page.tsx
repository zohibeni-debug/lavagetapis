import LocalPageView from "@/components/local-page-view";
import { requirePlace } from "@/lib/local-pages";
import { localMetadata } from "@/lib/local-pages/metadata";

const page = requirePlace("lavage-tapis-saint-maur-des-fosses");

export const metadata = localMetadata({
  title: page.title,
  description: page.description,
  slug: page.slug,
  image: "/img/tapis-berbere-salon.jpg",
});

export default function Page() {
  return <LocalPageView page={page} />;
}
