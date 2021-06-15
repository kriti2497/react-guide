import React, {useState} from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021')


  const dropdownHandler = (selectedYear) => {
    // console.log('Expenses.js')
    // console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={dropdownHandler} />
        {props.expenses.map(expense => {
            return <ExpenseItem name={expense.title} amount={expense.amount} date={expense.date}/> 
        })}
        {/* <ExpenseItem name={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
        <ExpenseItem name={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
        <ExpenseItem name={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
        <ExpenseItem name={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
        <ExpenseItem name={props.expenses[4].title} amount={props.expenses[4].amount} date={props.expenses[4].date}/> */}
      </Card>
    </div>
  )
}

export default Expenses
