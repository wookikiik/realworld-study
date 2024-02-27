import { titillium_web } from '@/app/ui/fonts';
import Link from "next/link";

export default function Navigation(){
    return (
        <nav className="navbar navbar-light">
        <div className="container">
          <Link className={`${titillium_web.className} navbar-brand`} href="/">conduit</Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/register">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}