import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as NavButtonArrowLeft } from "assets/icons/nav-button-arrow-left.svg";
import { ReactComponent as NavButtonArrowRight } from "assets/icons/nav-button-arrow-right.svg";

import "./nav-buttons.scss";

const NavButtons = ({
  disabledLeft,
  disabledRight,
  onClickLeft,
  onClickRight,
  classLeft = "",
  classRight = "",
  ...other
}) => {
  return (
    <div className="nav-buttons">
      <button
        className={`nav-buttons__button nav-buttons__left-button ${classLeft}`}
        type="button"
        disabled={disabledLeft}
        onClick={onClickLeft}
        {...other}
      >
        <NavButtonArrowLeft />
      </button>
      <button
        className={`nav-buttons__button nav-buttons__right-button ${classRight}`}
        type="button"
        disabled={disabledRight}
        onClick={onClickRight}
        {...other}
      >
        <NavButtonArrowRight />
      </button>
    </div>
  );
};

NavButtons.defaultProps = {
  disabledLeft: false,
  disabledRight: false,
  onClickLeft: () => {},
  onClickRight: () => {},
};

NavButtons.propTypes = {
  disabledLeft: PropTypes.bool,
  disabledRight: PropTypes.bool,
  onClickLeft: PropTypes.func,
  onClickRight: PropTypes.func,
  classLeft: PropTypes.string,
  classRight: PropTypes.string,
};

export default NavButtons;
