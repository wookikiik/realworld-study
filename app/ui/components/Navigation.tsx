import { titillium_web } from "@/app/ui/fonts";
import { Avatar } from "@/app/ui/components";
import Link from "next/link";
import { UserWithOptionalToken } from "@/app/lib/definitions";
import { useAuth } from "@/app/lib/hooks";
import Image from "next/image";

export default async function Navigation() {
  const { user, isLogined } = await useAuth();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className={`${titillium_web.className} navbar-brand`} href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" href="/">
              Home
            </Link>
          </li>
          {isLogined ? <UserNavigation user={user} /> : null}
          {isLogined ? null : <GuestNavigation />}
        </ul>
      </div>
    </nav>
  );
}

function UserNavigation({ user }: { user?: UserWithOptionalToken }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/editor">
          <i className="ion-compose"></i>&nbsp;New Article{" "}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/settings">
          {" "}
          <i className="ion-gear-a"></i>&nbsp;Settings{" "}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={`/profile/${user?.name}`}>
          <Image
            src={user?.image || ""}
            className="user-pic"
            alt={`${user?.name}`}
            width={26}
            height={26}
          />
          Eric Simons
        </a>
      </li>
    </>
  );
}

function GuestNavigation() {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" href="/login">
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/register">
          Sign up
        </Link>
      </li>
    </>
  );
}
