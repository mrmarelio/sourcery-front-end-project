import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as IconSearch } from "assets/icons/search.svg";

import "./button.scss";

const Size = {
  LARGE: "large",
  SMALL: "small",
  MEDIUM: "medium",
};

const Type = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUBMIT: "submit",
  TEXT: "text",
};

const Button = ({ children, type, size, icon, disabled }) => {
  return (
    <button
      className={classNames({
        btn: type === Type.PRIMARY || true,
        btnSecondary: type === Type.SECONDARY,
        btnSubmit: type === Type.SUBMIT,
        medium: size === Size.MEDIUM,
        text: type === Type.TEXT,
      })}
      disabled={disabled}
    >
      {icon === "search" && <IconSearch />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(Object.values(Type)),
  size: PropTypes.oneOf(Object.values(Size)),
  disabled: PropTypes.bool,
};

export default Button;
