"use client";

export default function IconButton({
  onClick,
  icon,
  cssStyle = "",
  children,
}: ButtonProps) {
  return (
    <button className={cssStyle} onClick={onClick}>
      <i className={icon}></i> {children}
    </button>
  );
}

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: string;
  children: React.ReactNode;
  cssStyle?: string;
};
