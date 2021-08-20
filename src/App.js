import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 6000,
    date: new Date(2021, 2, 28)
  },
  {
   id: 'e2',
   title: 'Medicine',
   amount: 1500,
   date: new Date(2021, 6, 28)
 },
 {
   id: 'e3',
   title: 'Petrol',
   amount: 2700,
   date: new Date(2021, 7, 7)
 },
 {
   id: 'e4',
   title: "Mainland China",
   amount: 3200,
   date: new Date(2021, 7, 13)
 }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses( prevExpense => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
