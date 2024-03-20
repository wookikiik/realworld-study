'use client';
import Image from "next/image"
export default function MyImage({ src }: { src: string }) {
    return (
        <Image loader={() => src} src={src} className="user-img" alt="" width={512} height={512} />
    )
}