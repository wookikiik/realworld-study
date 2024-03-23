'use client'
import { followAction, unfollowAction } from "@/app/lib/actions";
import { useEffect, useState } from "react";
export default function Follow({ name, isfollowing }:
    { name: string, isfollowing: boolean }) {
    const [followState, setFollowState] = useState(false)

    useEffect(() => {
        setFollowState(isfollowing);
    }, [])

    const handleClick = async () => {
        const res = await 
        (followState ? unfollowAction(name) : followAction(name));
        setFollowState(res?.profile?.following)
    }

    return (
        <button onClick={handleClick}
            className="btn btn-sm btn-outline-secondary action-btn">
            <i className="ion-plus-round"></i>
            &nbsp; {followState ? 'UnFollow' : 'Follow'} {name}
        </button>
    )
}