import React from "react";
import { Link } from "react-router-dom";
import BlogImage from "./../assets/images/blog.avif";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="posts">
          <div className="post">
            <div className="image">
              <img src={BlogImage} alt="Post Title" />
            </div>

            <div className="content">
              <Link className="post-link" to="/post/34">
                <h3>Post title</h3>
              </Link>
              <p>Post Short Description</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
