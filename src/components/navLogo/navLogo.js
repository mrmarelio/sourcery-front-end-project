import React from "react";
import Logo from "assets/icons/nav-main-logo.svg";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/">
      <div className="navigation__main-logo">
        <img src={Logo} alt="main logo" />
      </div>
    </Link>
  );
};

export default NavLogo;
