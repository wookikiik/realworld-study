import Image from 'next/image'
import Link from 'next/link'

export default function Avatar({profile, cssStyle=""}: AvatarProps){
    return (
        <Link className={cssStyle} href={`/profile/${profile.username}`}>
            <Image src={profile.image} alt={profile.username} width={32} height={32}/>
        </Link>
    )
}

type AvatarProps = {
    profile: {
        username: string,
        image: string,
    },
    cssStyle?: string,
}
