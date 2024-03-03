import { Articles } from '@/app/(pages)/(article)/_components/articles';
import { FeedTab } from '@/app/ui/components/tab/feedTab';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="profile-page">
      <div className="user-info">
        {/* TODO: user info container ?? */}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt=""
                className="user-img"
                width={512}
                height={512}
              />
              <h4>Eric Simons</h4>
              <p>
                Cofounder @GoThinkster, lived in Aol's HQ for a few months,
                kinda looks like Peeta from the Hunger Games
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
              </button>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"></i>
                &nbsp; Edit Profile Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: feed container ?? */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <FeedTab />
            </div>
            <Articles />
          </div>
        </div>
      </div>
    </div>
  );
}
