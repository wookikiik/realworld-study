'use client';
import Image from "next/image"
export default function MyImage({ src, className }: { src: string, className?: string }) {
    return (
        <Image
            loader={() => src}
            src={src}
            className={className ?? 'user-img'}
            alt=""
            width={512}
            height={512} />
    )
}