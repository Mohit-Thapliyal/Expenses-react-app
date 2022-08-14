import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "किताब",
    amount: 350,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "नया टी.वी. ", amount: 14999, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "गाड़ी का बीमा",
    amount: 11375,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "नया मेज़ (लकड़ी का)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
