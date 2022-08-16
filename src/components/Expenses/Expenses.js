import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState('2022');

  const expenseFilterHandler = (selectedDate) => {
     setFilterDate(selectedDate);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterDate;
  })


  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterDate}
        onSelectDate={expenseFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
