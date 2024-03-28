import Image from "next/image"
import { getArticles, getProfiles } from "@/app/data";
import MyImage from "@/app/ui/myImage";
import { auth } from "@/auth";
import Follow from "../../ui/followButton";
import EditProfile from "../../ui/editProfileButton";
import ToggleTab from "@/app/ui/toggleTab";
import ArticlePreview from "@/app/ui/articlePreview";
import Pagination from "@/app/ui/pagination";


export default async function Page({ params, searchParams }: {
    params: {
        name: string,
        
    },
    searchParams: {
        query?: string,
        page?: string,
    }

}) {    
    const data = await getProfiles(params.name);
    const userInfo = data.profile;
    const session = await auth();
    const isMyProfile = session?.user?.name === userInfo.username

    const tabTypeList = [{
        tabName: 'My Articles',
        isActive: !searchParams.query,
    },
    {
        tabName: 'Favorited Articles',
        isActive: !!searchParams.query,
        query: 'fav',
    }]

    const currentPage = Number(searchParams.page) || 1;
    const articles = await getArticles({
        page: currentPage.toString(),
        user: params.name,
        query: searchParams.query,
        articlesPerPage: 5,        
    });

    return (
        <div className="profile-page">
            <div className="user-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <MyImage src={userInfo?.image} />
                            <h4>{userInfo.username} </h4>
                            <p>
                                {userInfo.bio}
                            </p>
                            {
                                isMyProfile ?
                                    <EditProfile />
                                    :
                                    <Follow name={userInfo.username} isfollowing={userInfo.following} />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ToggleTab tabTypeList={tabTypeList} />
                        </div>
                        <ArticlePreview articlesParam={articles} />
                        <Pagination totalArticles={articles?.articlesCount} articlesPerPage={5} />
                    </div>
                </div>
            </div>
        </div>
    )
}