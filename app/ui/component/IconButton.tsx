"use client";

export default function IconButton({
  icon,
  cssStyle = "",
  children,
}: ButtonProps) {
  return (
    <button className={cssStyle}>
      <ion-icon name={icon}></ion-icon> {children}
    </button>
  );
}

type ButtonProps = {
  icon: string;
  children: React.ReactNode;
  cssStyle?: string;
};
