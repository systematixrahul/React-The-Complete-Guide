import { useState } from "react";
import "./ExpensesForm.css";

function ExpensesForm(props) {
  //   const [enterdTitle, setEnterdTitle] = useState("");
  //   const [enterdAmount, setEnterdAmount] = useState("");
  //   const [enterdDate, setEnterdDate] = useState("");

  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmount: "",
    enterdDate: "",
  });

  const titleChangeHandler = (event) => {
    //setEnterdTitle("titleChangeHandler: ", event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdTitle: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enterdTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterdAmount: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enterdAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enterdDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expandData = {
      title: userInput.enterdTitle,
      amount: userInput.enterdAmount,
      date: userInput.enterdDate,
    };
    console.log("Check form Data", expandData);
    // setUserInput.enterdTitle("");
    // setUserInput.enterdAmount("");
    // setUserInput.enterdDate("");
    props.onSaveExpandData(expandData);
    setUserInput({
      enterdTitle: "",
      enterdAmount: "",
      enterdDate: "",
    });
  };

  return (
    <div className="expense-from">
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Title.."
          onChange={titleChangeHandler}
          value={userInput.enterdTitle}
        />

        <label>Amount</label>
        <input
          type="text"
          placeholder="Amount.."
          onChange={amountChangeHandler}
          value={userInput.enterdAmount}
        />

        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          placeholder="Date"
          onChange={dateChangeHandler}
          value={userInput.enterdDate}
        />
        <br />
        <br />
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export { ExpensesForm };
