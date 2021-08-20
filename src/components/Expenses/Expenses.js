import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  let expenseContent = <p>No expenses found!!!</p>;

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHandler} year={filteredYear} />
        <ExpensesChart expenses={filteredExpense} />
        {filteredExpense.length !== 0
          ? filteredExpense.map((expense) => (
              <ExpenseItem key={expense.id} expenses={expense} />
            ))
          : expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
