import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="post/343">Signle Blog</Link>
          </li>
          <li>
            <Link to="write">Write</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
