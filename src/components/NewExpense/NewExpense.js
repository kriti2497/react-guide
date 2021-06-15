import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm.js'

import './NewExpense.css'
const NewExpense = (props) => {

  const [isEdit, setIsEdit] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    // console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsEdit(!isEdit)
  }

  const showHideForm = () => {
    setIsEdit(!isEdit)
  }


  return (
    <div className="new-expense">
        {
          isEdit? 
          <ExpenseForm editState={showHideForm} onSaveExpenseData={saveExpenseDataHandler} />:
          <button onClick={showHideForm}>Add Expense</button>
        }
    </div>
  )
}

export default NewExpense
