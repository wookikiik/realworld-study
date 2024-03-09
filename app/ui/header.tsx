import { titilliumWeb } from "./fonts";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const isLoggedIn = session?.user
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className={`${titilliumWeb} navbar-brand`} href={"/"}>
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              Home
            </Link>
          </li>
          {isLoggedIn ? <>
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
          </> :
            <>
              <li className="nav-item">
                <Link className="nav-link" href="/editor">
                  <i className="ion-compose"></i>&nbsp;New Article </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/settings">
                  <i className="ion-gear-a"></i>&nbsp;Settings </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/profile/eric-simons">
                  {/* <Image src="" className="user-pic" /> */}
                  Eric Simons
                </Link>
              </li></>}

        </ul>
      </div>
    </nav>
  );
}
