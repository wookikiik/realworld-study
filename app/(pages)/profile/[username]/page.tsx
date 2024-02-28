import { fetchAllArticle, fetchProfile } from "@/app/lib/data";
import { useAuth } from "@/app/lib/hooks";
import Image from "next/image";
import FeedTab from "./_components/FeedTab";
import Articles from "@/app/ui/components/Articles";

export default async function Page({ params: { username } }: PageProps) {
  const profile = await fetchProfile(username).then((data) => data.profile);
  const { user, isLogined } = await useAuth();
  const isArticleAuthor = isLogined && profile.username === user?.name;

  const articles = await fetchAllArticle();

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Image
                className="user-img"
                src={profile.image}
                alt={profile.username}
                width={100}
                height={100}
              />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>
              {isArticleAuthor ? (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-gear-a"></i>
                  &nbsp; Edit Profile Settings
                </button>
              ) : (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round"></i>
                  &nbsp; Follow {profile.username}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <Articles
              tab={
                <div className="articles-toggle">
                  <FeedTab author={profile} />
                </div>
              }
              articles={articles}
            />
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
};
