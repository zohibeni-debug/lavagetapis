import LocalPageView from "@/components/local-page-view";
import { requirePlace } from "@/lib/local-pages";
import { localMetadata } from "@/lib/local-pages/metadata";

const page = requirePlace("lavage-tapis-paris-10e");

export const metadata = localMetadata({
  title: page.title,
  description: page.description,
  slug: page.slug,
  image: "/img/hero-lavage-tapis-900.jpg",
});

export default function Page() {
  return <LocalPageView page={page} />;
}
