import { titilliumWeb } from "./fonts";
import Link from "next/link";
export default function Header() {
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
          <li className="nav-item">
            <Link className="nav-link" href={"/login"}>
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/register"}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
