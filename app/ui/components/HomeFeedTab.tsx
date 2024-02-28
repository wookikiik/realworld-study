import { useAuth } from "@/app/lib/hooks";
import Tabs from "./Tabs";
import { UserWithOptionalToken } from "@/app/lib/definitions";

export default async function HomeFeedTab() {
  const tabs = createTabProps(await useAuth());
  return <Tabs tabs={tabs} />;
}

function createTabProps({ user, isLogined }: CreateParams) {
  return [
    {
      name: "Your Feed",
      src: `/#/${user?.name}`,
      permissions: () => isLogined,
    },
    {
      name: "Global Feed",
      src: "/#/global",
    },
  ];
}

type CreateParams = {
  user: UserWithOptionalToken | undefined;
  isLogined: boolean;
};
