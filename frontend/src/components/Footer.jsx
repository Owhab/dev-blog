import React from "react";
import Logo from "./../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} width={200} alt="" />
        </Link>
        <p>Developed by Abdul Owhab</p>
      </div>
    </footer>
  );
};

export default Footer;
