import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import CustomDatePickerInput from "./CustomDatePickerInput";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  const [isDateOpen, setIsDateOpen] = useState(false);

  const handleOpenDate = () => {
    setIsDateOpen(!isDateOpen);
  };

  return (
    <ReactDatePicker
      disabledKeyboardNavigation
      showPopperArrow={false}
      useWeekdaysShort={true}
      calendarStartDay={1}
      dateFormat={"d MMMM yyyy"}
      onChangeRaw={handleDateChangeRaw}
      selected={selectedDate}
      onChange={setSelectedDate}
      open={isDateOpen}
      onSelect={handleOpenDate}
      popperPlacement="bottom"
      customInput={
        <CustomDatePickerInput
          handleOpenDate={handleOpenDate}
          value={selectedDate}
        />
      }
    />
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
};

export default DatePicker;
