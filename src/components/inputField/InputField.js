import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./input-field.scss";

const InputField = ({
  type,
  name,
  label,
  placeholder,
  disabled,
  isError,
  errorMessage,
  iconAfter,
  iconBefore,
  inputRef,
  ...other
}) => {
  return (
    <div className="input-field">
      {label && (
        <label className="input-field__label" htmlFor={name}>
          {label}
        </label>
      )}
      <div
        className={classNames("input-field__input-wrapper", {
          "input-field__input-wrapper--error": isError,
        })}
      >
        {iconBefore}
        <input
          className="input-field__input"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          ref={inputRef}
          {...other}
        />
        {iconAfter}
      </div>
      {errorMessage && <div className="input-field__error">{errorMessage}</div>}
    </div>
  );
};

InputField.defaultProps = {
  type: "text",
  name: "input",
  label: "",
  placeholder: "",
  disabled: false,
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  inputRef: PropTypes.func,
};

export default InputField;
