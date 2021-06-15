import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    // let expenseContent = <p>No Expenses Found</p>

    if(props.expenses.length === 0){
        return <h2 className="expense-list__fallback">Found No Expenses</h2>
    }
    return (
        <ul className="expense-list">
            {
                props.expenses.map((expense, i) => {
                    return <ExpenseItem key={expense.id} name={expense.title} amount={expense.amount} date={expense.date}/> 
                    })
            }
        </ul>
    )
}

export default ExpensesList
