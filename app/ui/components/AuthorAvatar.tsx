import { Avatar } from ".";

export default function AuthorAvatar({
  author,
  cssStyle = "",
  children = null,
  sx = { width: 32, height: 32 },
}: AuthorAvatarProps) {
  return (
    <>
      {children ? (
        { children }
      ) : (
        <Avatar profile={author} cssStyle={cssStyle} sx={sx} />
      )}
      <div className="info">
        <a href="/profile/eric-simons" className="author">
          {author.username}
        </a>
        <span className="date">January 20th</span>
      </div>
    </>
  );
}

type AuthorAvatarProps = {
  author: {
    username: string;
    image: string;
  };
  cssStyle?: string;
  children?: React.ReactNode;
  sx?: { width: number; height: number };
};
