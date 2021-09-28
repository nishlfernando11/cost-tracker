import React, {useState} from 'react';

import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import Card from '../UI/Card';
import Chart from "../Chart/Chart";

const Expenses = (props) => {
    const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2021');

    const updateFilteredYear = year => {
        setFilteredYear(year);
    };

    const filteredExpenses = expenses
        .filter(expense => expense.date.getFullYear().toString() === filteredYear);


    const chartPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for (let expense of filteredExpenses) {
        const month = expense.date.getMonth();
        chartPoints[month].value += expense.amount;
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeSelectedYear={updateFilteredYear} selectedYear={filteredYear} />
                <Chart chartPoints={chartPoints}/>
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </div>

    );

};

export default Expenses;