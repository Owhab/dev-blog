import React from "react";
import SingleBlogImage from "./../assets/images/blog.avif";
import UserProfile from "./../assets/images/profile.webp";

const Single = () => {
  return (
    <div className="single">
      <div className="container">
        <div className="post-details">
          <div className="content">
            <img src={SingleBlogImage} alt="News Details" />
            <div className="user">
              <img src={UserProfile} height={50} width={50} alt="" />
              <div className="info">
                <span>John Doe</span>
                <p>Posted 2 hours ago</p>
              </div>
            </div>
          </div>
          <div className="menu">This is right side</div>
        </div>
      </div>
    </div>
  );
};

export default Single;
