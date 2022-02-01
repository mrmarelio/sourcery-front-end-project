import React from "react";
import PropTypes from "prop-types";
import BurgerMenuIcon from "assets/icons/burger-menu.svg";
import BurgerMenuCloseIcon from "assets/icons/burger-menu-close.svg";
import "./burger-menu.scss";

const BurgerMenuButton = ({ toggleBurgerMenu, isBurgerMenuOpen }) => {
  return (
    <button
      className="burger-menu__button"
      type="button"
      onClick={toggleBurgerMenu}
    >
      {isBurgerMenuOpen ? (
        <img src={BurgerMenuCloseIcon} alt="menu close icon" />
      ) : (
        <img src={BurgerMenuIcon} alt="menu icon" />
      )}
    </button>
  );
};

BurgerMenuButton.propTypes = {
  toggleBurgerMenu: PropTypes.func.isRequired,
  isBurgerMenuOpen: PropTypes.bool.isRequired,
};

export default BurgerMenuButton;
