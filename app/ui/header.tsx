'use server';
import { titilliumWeb } from "./fonts";
import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";

export default async function Header() {
  const session = await auth()  
  const isLoggedIn = session?.user;
  console.log('header', session);

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
          {!isLoggedIn ? <>
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
                  <Image src={session?.user?.image ?? ''} alt='' className="user-pic" unoptimized={true} width={25} height={25} />
                  {session?.user?.name}
                </Link>
              </li></>}

        </ul>
      </div>
    </nav>
  );
}