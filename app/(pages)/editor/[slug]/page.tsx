import { fetchArticle } from "@/app/lib/data";
import { Form } from "../_components/Form";
import { updateArticle } from "@/app/lib/actions";

export default async function Page({ params: { slug } }: PageProps) {
  const data = await fetchArticle(slug);
  if ("errors" in data) {
    throw new Error("Error fetching article data");
  }
  const { article } = data;
  return <Form article={article} onAction={updateArticle} />;
}

interface PageProps {
  params: {
    slug: string;
  };
}
