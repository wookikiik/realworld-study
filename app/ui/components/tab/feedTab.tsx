import Link from 'next/link';

export const FeedTab = () => {
  return (
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <Link className="nav-link" href="">
          Your Feed
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" href="">
          Global Feed
        </Link>
      </li>
    </ul>
  );
};
