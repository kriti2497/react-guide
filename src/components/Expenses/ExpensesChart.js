import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { id: 1, value: 0, label: 'Jan'},
        { id: 2, value: 0, label: 'Feb'},
        { id: 3, value: 0, label: 'Mar'},
        { id: 4, value: 0, label: 'Apr'},
        { id: 5, value: 0, label: 'May'},
        { id: 6, value: 0, label: 'Jun'},
        { id: 7, value: 0, label: 'Jul'},
        { id: 8, value: 0, label: 'Aug'},
        { id: 9, value: 0, label: 'Sep'},
        { id: 10, value: 0, label: 'Oct'},
        { id: 11, value: 0, label: 'Nov'},
        { id: 12, value: 0, label: 'Dec'},
    ];

    for(const expense in props.expenses){
        const expenseMonth = expense.date.getMonth
    }
    return (
        <div>
            <Chart  />
        </div>
    )
}

export default ExpensesChart
