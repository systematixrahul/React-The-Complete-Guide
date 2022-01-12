import { useState } from "react";
import { ExpensesForm } from "./ExpensesFrom";
import "./NewExpense.css";

function NewExpenses(props) {
  const [formShow, setFormShow] = useState(false);
  const saveExpandDatahandler = (enterExpensesData) => {
    const expensesData = {
      ...enterExpensesData,
      id: Math.random().toString(),
    };
    console.log("other component expensesData: ", expensesData);
    props.onAddExpenses(expensesData);

    setFormShow(false);
  };
  const showExpenseForm = () => {
    setFormShow(true);
  };
  const cancelExpensesFormEditing = () => {
    setFormShow(false);
  };

  return (
    <div className="new-expense">
      {!formShow && <button onClick={showExpenseForm}>Add Expenses</button>}
      {formShow && (
        <ExpensesForm
          onSaveExpandData={saveExpandDatahandler}
          onCancel={cancelExpensesFormEditing}
        />
      )}
    </div>
  );
}

export { NewExpenses };
