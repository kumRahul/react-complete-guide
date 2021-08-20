import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div className="new-expense">
        {!showForm && (
          <button onClick={toggleFormHandler}>Add New Expense</button>
        )}
        {showForm && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseHandler}
            toggleForm={toggleFormHandler}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
