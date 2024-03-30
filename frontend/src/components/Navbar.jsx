import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="DevBlog Logo" width={200} />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="?cat=art">Art</Link>
            </li>
            <li>
              <Link to="?cat=science">Science</Link>
            </li>
            <li>
              <Link to="?cat=technology">Technology</Link>
            </li>
            <li>
              <Link to="?cat=cinema">Cinema</Link>
            </li>
            <li>
              <Link to="?cat=design">Design</Link>
            </li>
            <li>
              <Link to="?cat=food">Food</Link>
            </li>
          </ul>
          <span>John</span>
          <span>
            <Link>Logout</Link>
          </span>
          <span>
            <Link to="/write">Write</Link>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
