import React, {useState} from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [showForm, setShowForm] = useState(false);

    const [newExpenseTitle, setNewExpenseTitle] = useState('');
    const [newExpenseAmount, setNewExpenseAmount] = useState('');
    const [newExpenseDate, setNewExpenseDate] = useState('');

    const expenseTitleHandler = event => {
       setNewExpenseTitle(event.target.value);
    };
    const expenseAmountHandler = event => {
        setNewExpenseAmount(event.target.value);
    };
    const expenseDateHandler = event => {
        setNewExpenseDate(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        props.onSubmitNewExpense({
            title: newExpenseTitle,
            amount: parseFloat(newExpenseAmount),
            date: new Date(newExpenseDate)
        });
        setNewExpenseTitle('');
        setNewExpenseAmount('');
        setNewExpenseDate('');
        hideFormHandler();
    };

    const showFormHandler = () => {
        setShowForm(true);
    };
    const hideFormHandler = () => {
        setShowForm(false);
    };

    if(showForm){
        return (
            <form onSubmit={submitHandler}>
                <div className="newExpenseForm">
                    <div className="newExpenseForm_item">
                        <label>Title</label>
                        <input type="text" value={newExpenseTitle} onChange={expenseTitleHandler}/>
                    </div>
                    <div className="newExpenseForm_item">
                        <label>Amount</label>
                        <input type="number" start="0.01" step="0.01" value={newExpenseAmount} onChange={expenseAmountHandler}/>
                    </div>
                    <div className="newExpenseForm_item">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={newExpenseDate} onChange={expenseDateHandler}/>
                    </div>
                    <div className="newExpenseForm_action">
                        <button type="submit">Add Expense</button>
                        <button type="button" onClick={hideFormHandler}>Cancel</button>
                    </div>
                </div>
            </form>
        );
    }

    return (
        <div className="newExpenseForm">
            <div className="newExpenseForm_action">
                <button onClick={showFormHandler}>Add New Expense</button>
            </div>
        </div>
    )
};

export default NewExpenseForm;