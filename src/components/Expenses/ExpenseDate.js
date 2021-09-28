import React from 'react';

import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: 'numeric'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-item_date">
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )

};

export default ExpenseDate;