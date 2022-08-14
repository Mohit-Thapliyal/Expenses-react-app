import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formView, setFormView] = useState(false);

  const onShowHandler = () => {
    setFormView(true);
  };
  const onHideHandler = () => {
    setFormView(false);
  }

  if (formView === false) {
    return (
      <div className="new-expense">
        <button onClick={onShowHandler}>नया खर्च जोड़ें</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} onHideHandler={onHideHandler} />
    </div>
  );
};

export default NewExpense;
