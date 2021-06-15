import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    // initial value is string for type="number"/'date' becoz event.target.value will be a string even if number
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnteredTitle(event.target.value)
        // // setUserInput({
        // //     ...userInput,
        // //     enteredTitle: event.target.value
        // // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value }
        // })
    }

    const dateChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        // console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }


    return (
        <form onSubmit={submitHandler}>
           <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}  />
                </div> 
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div> 
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31" />
                </div> 
           </div> 
           <div className="new-expense__actions">
               <button type="submit">Add Expense</button>
           </div>
        </form>
    )
}

export default ExpenseForm
