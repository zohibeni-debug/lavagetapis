import LocalPageView from "@/components/local-page-view";
import { requirePlace } from "@/lib/local-pages";
import { localMetadata } from "@/lib/local-pages/metadata";

const page = requirePlace("lavage-tapis-paris-5e");

export const metadata = localMetadata({
  title: page.title,
  description: page.description,
  slug: page.slug,
  image: "/img/etape-3-shampooing.jpg",
});

export default function Page() {
  return <LocalPageView page={page} />;
}
