import Image from "next/image";
import Link from "next/link";

export default function Avatar({
  profile,
  cssStyle = "",
  children = null,
  sx = { width: 32, height: 32 },
}: AvatarProps) {
  return (
    <Link className={cssStyle} href={`/profile/${profile.username}`}>
      <Image src={profile.image} alt={profile.username} {...sx} />
      {children}
    </Link>
  );
}

type AvatarProps = {
  profile: {
    username: string;
    image: string;
  };
  cssStyle?: string;
  children?: React.ReactNode;
  sx?: { width: number; height: number };
};
