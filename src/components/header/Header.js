import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Notification } from "assets/icons/notification.svg";
import UserProfileButton from "components/userProfileButton";
import Navigation from "components/main-nav";
import NavLogo from "components/navLogo/navLogo";
import BurgerMenu from "components/main-nav/BurgerMenu";
import BurgerMenuButton from "components/main-nav/BurgerMenuButton";
import "components/header/header.scss";

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);
  const location = useLocation();

  //close burger menu, when going to Dashboard by clicking the main logo
  useEffect(() => {
    setIsBurgerMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="header__main">
        <div className="header-left">
          <NavLogo />
        </div>
        <div className="header-middle">
          <Navigation />
          <div className="navigation__burger-menu">
            <BurgerMenuButton
              toggleBurgerMenu={toggleBurgerMenu}
              isBurgerMenuOpen={isBurgerMenuOpen}
            />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right_bell">
            <Notification />
          </div>
          <div className="header-right_profile">
            <UserProfileButton />
          </div>
        </div>
      </div>
      <BurgerMenu
        toggleBurgerMenu={toggleBurgerMenu}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
    </header>
  );
};
export default Header;
