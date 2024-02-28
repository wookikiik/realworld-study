import { Author } from "@/app/lib/definitions";
import { Tabs } from "@/app/ui/components";

export default function FeedTab({ author }: FeedTabProps) {
  const tabs = createTabProps(author.username);
  return <Tabs tabs={tabs} />;
}

function createTabProps(username: string) {
  return [
    {
      name: "My Articles",
      src: `/#/${username}`,
    },
    {
      name: "Favorited Articles",
      src: `/#/favorite/${username}`,
    },
  ];
}

type FeedTabProps = {
  author: Author;
};
