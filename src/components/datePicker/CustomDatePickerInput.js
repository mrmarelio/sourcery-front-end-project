import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import InputField from "components/inputField";
import CalendarIcon from "../../assets/icons/reservations-search-icons/calendar-icon.svg";

const CustomDatePickerInput = forwardRef(({ value, handleOpenDate }, ref) => (
  <InputField
    label="Reservation date"
    value={value}
    readOnly
    inputRef={ref}
    onClick={handleOpenDate}
    iconAfter={<img className="input-field__icon" src={CalendarIcon} alt="" />}
  />
));

CustomDatePickerInput.displayName = "CustomDatePickerInput";
CustomDatePickerInput.propTypes = {
  handleOpenDate: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

export default CustomDatePickerInput;
