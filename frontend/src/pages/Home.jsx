import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>This is Home page</h1>
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
          <Link to="single">Signle Blog</Link>
        </li>
        <li>
          <Link to="write">Write</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
