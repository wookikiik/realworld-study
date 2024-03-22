
'use client'
import { followAction } from "@/app/lib/actions";
import { useState } from "react";
export default function Follow({ name }: { name: string }) {
    const [data, setData] = useState(null)

    const handleClick = async () => {
        const res = await followAction(name);        
        setData(res)
    }

    return (
        <button onClick={handleClick}
            className="btn btn-sm btn-outline-secondary action-btn">
            <i className="ion-plus-round"></i>
            &nbsp; Follow {name}
        </button>
    )
}