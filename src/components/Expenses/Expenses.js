import React, {useState} from 'react'
import Card from '../UI/Card'
// import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021')

  const dropdownHandler = (selectedYear) => {
    // console.log('Expenses.js')
    setFilteredYear(selectedYear);
  };

  const filteredExps = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
  })

  // Method 3

  // present in expensesList.js

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={dropdownHandler} />
        <ExpensesChart expenses={filteredExps} />
        {/* Method 3  stored conditionally outside the return statement */}
        <ExpensesList expenses={filteredExps} />    

        {/* Method 2 */}
        {/* {filteredExps.length === 0 && (<p>No Expenses Found</p>)}
        {filteredExps.length > 0 &&filteredExps.map((expense, i) => {
            return <ExpenseItem key={expense.id} name={expense.title} amount={expense.amount} date={expense.date}/> 
        })} */}

        {/* Method 1 */}
        {/* {filteredExps.length === 0 ? (<p>No Expenses Found</p>): (filteredExps.map((expense, i) => {
            return <ExpenseItem key={expense.id} name={expense.title} amount={expense.amount} date={expense.date}/> 
        }))} */}
        
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
