import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {

    const { onSaveExpenseData, toggleForm } = props;
    const[title, setTitle] = useState('');
    const[amount, setAmount] = useState('');
    const[date, setDate] = useState('');

    const titleChangeHandler = evt => {
        setTitle(evt.target.value);
    };

    const amountChangeHandler = evt => {
        setAmount(evt.target.value);
    };

    const dateChangeHandler = evt => {
        setDate(evt.target.value);
    };

    const submitHandler = evt => {
        evt.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        onSaveExpenseData(expenseData);
        toggleForm(false);
        setTitle('');
        setAmount('');
        setDate('');

    };

    return <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.00" onChange={amountChangeHandler} value={amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="2019-01-01" max="2021-12-31" onChange={dateChangeHandler} value={date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={toggleForm} >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
};

export default ExpenseForm;