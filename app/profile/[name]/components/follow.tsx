
'use client'
import { follow } from "@/app/lib/actions";
import { useState } from "react";
export default function Follow({ name }: { name: string }) {
    const [data, setData] = useState(null)

    const handleClick = async () => {
        const res = await follow(name);
        const data = await res.json()
        setData(data)
    }

    return (
        <button onClick={handleClick}
            className="btn btn-sm btn-outline-secondary action-btn">
            <i className="ion-plus-round"></i>
            &nbsp; Follow {name}
        </button>
    )
}