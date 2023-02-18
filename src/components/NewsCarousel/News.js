import React from "react";

export default function News() {
  return (
    <>
      <div className="main-container-news">
        <div className="container-news">
          <header>
            <h1 className="fs-1">Subscription Plans</h1>
          </header>
          <div id="news" role="button">
            <div className="article">
              <div className="article-in">
                <img
                  src="https://images.pexels.com/photos/254069/pexels-photo-254069.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="rounded-3"
                  alt="..."
                />
                <div className="fs-4">Adults and children subscriptions</div>
              </div>
            </div>
            <div className="article">
              <div className="article-in">
                <img
                  src="https://images.pexels.com/photos/7477717/pexels-photo-7477717.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="rounded-3"
                  alt="..."
                />
                <div className="fs-4">Subscriptions for seniors</div>
              </div>
            </div>
            <div className="article">
              <div className="article-in">
                <img
                  src="https://images.pexels.com/photos/3820065/pexels-photo-3820065.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="rounded-3 "
                  alt="..."
                />
                <div className="fs-4">Continuous subscriptions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
