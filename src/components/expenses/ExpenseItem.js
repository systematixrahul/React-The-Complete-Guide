import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title);
  //let title = props.title;
  // const handleClick = () => {
  //   setTitle("Update title");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={handleClick}>Click Me</button> */}
    </Card>
  );
};

export default ExpenseItem;
