import React from "react";
import SingleBlogImage from "./../assets/images/blog.avif";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Other posts you may like.</h2>
      <div className="post">
        <img src={SingleBlogImage} alt="" />
        <h3>Post title</h3>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Menu;
