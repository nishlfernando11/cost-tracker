import React from 'react';

import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


    const newExpenseSubmitHandler = (expense) => {
        props.onAddNewExpense({
            id: 'e' + Math.random().toString(),
            ...expense
        });
    };

    return (
        <div className="newExpense">
            <NewExpenseForm onSubmitNewExpense={newExpenseSubmitHandler} />
        </div>
    );


};

export default NewExpense;