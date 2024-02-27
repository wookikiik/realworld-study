import { titillium_web } from '@/app/ui/fonts';
import { Avatar } from '@/app/ui/component';
import Link from "next/link";
import {User} from '@/app/lib/definitions';
import { auth } from '@/auth';

export default async function Navigation(){

  const session = await auth();
  const isLogined = !session?.user;
  const user = session?.user;

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className={`${titillium_web.className} navbar-brand`} href="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className="nav-link active" href="/">Home</Link>
          </li>
          {isLogined ? <UserNavigation user={user}/> : null}
          {isLogined ? null : <GuestNavigation /> }
        </ul>
      </div>
    </nav>
  )
}

function UserNavigation({user}: {user?: User}){
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/editor"><ion-icon name="clipboard"></ion-icon>&nbsp;New Article </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/settings"> <i className="ion-gear-a"></i>&nbsp;Settings </a>
      </li>
      <li className="nav-item">
        <Avatar cssStyle="nav-link" profile={{username: 'Eric Simons', image: 'http://i.imgur.com/Qr71crq.jpg'}} />
      </li>
    </>
  )
}

function GuestNavigation(){
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" href="/login">Sign in</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/register">Sign up</Link>
      </li>
    </>
  )
}