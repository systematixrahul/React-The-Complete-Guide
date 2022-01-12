import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const updateDate = new Date(props.date);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  console.log("day: ", day);
  const year = updateDate.getFullYear();
  //console.log("props.date: ", updateDate, year);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
