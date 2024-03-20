import Image from "next/image"
import {getProfiles} from "@/app/data";
import MyImage from "@/app/ui/myImage";
import { auth } from "@/auth";
import Follow from "./components/follow";

export default async function Page({ params }: { params: { name: string } }) {

    const data = await getProfiles(params.name);
    const userInfo = data.profile;
    const session = await auth();
    const isMyProfile = session?.user?.name === userInfo.username

    console.log(userInfo);
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
                            {/* <button className="btn btn-sm btn-outline-secondary action-btn">
                                <i className="ion-plus-round"></i>
                                &nbsp; Follow {userInfo.username}
                            </button> */}
                            <Follow name={userInfo.username} />
                            {isMyProfile ?
                                <button className="btn btn-sm btn-outline-secondary action-btn">
                                    <i className="ion-gear-a"></i>
                                    &nbsp; Edit Profile Settings
                                </button> : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <a className="nav-link active" href="">My Articles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Favorited Articles</a>
                                </li>
                            </ul>
                        </div>

                        <div className="article-preview">
                            <div className="article-meta">
                                <a href="/profile/albert-pai">
                                    <Image src="http://i.imgur.com/N4VcUeJ.jpg" alt="" width={512} height={512} /></a>
                                <div className="info">
                                    <a href="/profile/albert-pai" className="author">Albert Pai</a>
                                    <span className="date">January 20th</span>
                                </div>
                                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                                    <i className="ion-heart"></i> 32
                                </button>
                            </div>
                            <a href="/article/the-song-you" className="preview-link">
                                <h1>The song you won&apos;t ever stop singing. No matter how hard you try.</h1>
                                <p>This is the description for the post.</p>
                                <span>Read more...</span>
                                <ul className="tag-list">
                                    <li className="tag-default tag-pill tag-outline">Music</li>
                                    <li className="tag-default tag-pill tag-outline">Song</li>
                                </ul>
                            </a>
                        </div>

                        <ul className="pagination">
                            <li className="page-item active">
                                <a className="page-link" href="">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="">2</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}