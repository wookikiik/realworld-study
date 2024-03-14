import { fetchProfile } from "@/app/lib/data";
import { auth } from "@/auth";
import Image from "next/image";
import Articles from "./_components/Articles";
import Action from "./_components/Action";

export default async function Page({
  params: { username },
  searchParams: { feed = "feed" },
}: PageProps) {
  const author = await fetchProfile(username).then((data) => data.profile);
  const session = await auth();
  const user = session?.user;

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Image
                className="user-img"
                src={author.image}
                alt={author.username}
                width={100}
                height={100}
              />
              <h4>{author.username}</h4>
              <p>{author.bio}</p>
              <Action author={author} user={user} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <Articles feed={feed} />
          </div>
        </div>
      </div>
    </div>
  );
}

type PageProps = {
  params: {
    username: string;
  };
  searchParams: {
    feed?: string;
  };
};
