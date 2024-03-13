import Image from 'next/image';
import Link from 'next/link';

export const Comment = () => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className="card-footer">
        <Link href="/profile/author" className="comment-author">
          <Image
            src="http://i.imgur.com/Qr71crq.jpg"
            alt=""
            width={512}
            height={512}
            className="comment-author-img"
          />
        </Link>
        &nbsp;
        <Link href="/profile/jacob-schmidt" className="comment-author">
          Jacob Schmidt
        </Link>
        <span className="date-posted">Dec 29th</span>
      </div>
    </div>
  );
};
