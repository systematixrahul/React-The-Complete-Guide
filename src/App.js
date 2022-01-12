import React, { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import { NewExpenses } from "./components/new-expenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  //const [expenses, setExpenses] = useState(dummyexpenses);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  console.log("dummyexpenses check karo bhaya: ", DUMMY_EXPENSES);
  const addExpensesHandler = (expense) => {
    console.log("App.js");
    console.log("form data expense: ", expense);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpenses onAddExpenses={addExpensesHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
