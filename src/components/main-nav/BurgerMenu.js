import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "./NavigationItem";
import "./burger-menu.scss";

const BurgerMenu = ({ toggleBurgerMenu, isBurgerMenuOpen }) => {
  const navigationItems = [
    {
      link: "/",
      itemName: "Dashboard",
    },
    {
      link: "/reservations",
      itemName: "Reservations",
    },
    {
      link: "/eat-out",
      itemName: "Eat Out",
    },
  ];

  return (
    <div className="burger-menu">
      {isBurgerMenuOpen && (
        <ul className="burger-menu__items">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.link}
              link={item.link}
              itemName={item.itemName}
              onClick={toggleBurgerMenu}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

BurgerMenu.propTypes = {
  toggleBurgerMenu: PropTypes.func.isRequired,
  isBurgerMenuOpen: PropTypes.bool.isRequired,
};

export default BurgerMenu;
