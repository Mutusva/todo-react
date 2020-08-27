import React from "react";
import DatePicker from "react-datepicker";

const DatePickerFn = ({ startDate, handleChange }) => {
  return (
    <DatePicker
      className="form-control date-picker"
      selected={startDate}
      onChange={handleChange}
    />
  );
};

export default DatePickerFn;