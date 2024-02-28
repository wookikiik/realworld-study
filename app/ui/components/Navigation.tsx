"use client";

import { titillium_web } from "@/app/ui/fonts";
import ReactLink from "next/link";
import { User } from "@/app/lib/definitions";
import { useAuth } from "@/app/lib/providers/AuthProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { user, isLogined } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <ReactLink
          className={`${titillium_web.className} navbar-brand`}
          href="/"
        >
          conduit
        </ReactLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link active={pathname === "/"} href="/">
              Home
            </Link>
          </li>
          {isLogined ? (
            <UserNavigation pathname={pathname} user={user!!} />
          ) : (
            <GuestNavigation pathname={pathname} />
          )}
        </ul>
      </div>
    </nav>
  );
}

function UserNavigation({ pathname, user }: UserNavigationProps) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/editor">
          <i className="ion-compose"></i>&nbsp;New Article
        </a>
      </li>
      <li className="nav-item">
        <Link active={pathname === "/settings"} href="/settings">
          {" "}
          <i className="ion-gear-a"></i>&nbsp;Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          active={pathname.startsWith("/profile")}
          href={`/profile/${user?.username}`}
        >
          <Image
            src={user.image || ""}
            className="user-pic"
            alt={`${user.username}`}
            width={26}
            height={26}
          />
          Eric Simons
        </Link>
      </li>
    </>
  );
}

function GuestNavigation({ pathname }: NavigationProps) {
  return (
    <>
      <li className="nav-item">
        <Link active={pathname === "/login"} href="/login">
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link active={pathname === "/register"} href="/register">
          Sign up
        </Link>
      </li>
    </>
  );
}

function Link({ active, href, children }: LinkProps) {
  const cssStyle = ["nav-link"];
  active && cssStyle.push("active");
  return (
    <ReactLink className={cssStyle.join(" ")} href={href}>
      {children}
    </ReactLink>
  );
}

type LinkProps = { active: boolean; href: string; children: React.ReactNode };
type NavigationProps = { pathname: string };
type UserNavigationProps = NavigationProps & { user: User };
