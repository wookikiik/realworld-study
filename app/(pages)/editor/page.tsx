import { createArticle } from "@/app/lib/actions";
import { Form } from "./_components/Form";

export default function Page() {
  return <Form onAction={createArticle} />;
}
