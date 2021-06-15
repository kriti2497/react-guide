import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'
// year,month, date starts at 0 so actually we have 2022, 3, 28
const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 459.66,
  },
  {
    id: 2,
    date: new Date(2020, 5, 17),
    title: "Bike Insurance",
    amount: 877.66,
  },
  {
    id: 3,
    date: new Date(2019, 12, 15),
    title: "Auto Insurance",
    amount: 600,
  },
  {
    id: 4,
    date: new Date(2020, 11, 8),
    title: "Home Insurance",
    amount: 45999.9,
  },
  {
    id: 5,
    date: new Date(2019, 3, 19),
    title: "Life Insurance",
    amount: 4554119.88,
  },
];
const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = (expense) => {
    console.log('In app.js')
    // console.log(expense)
    setExpenses(prevState => {
      return [expense, ...prevState]
    });
  }

  // alternative to jsx code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, {expenses: expenses})
  // );
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses}/>
        {/* <ExpenseItem name={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpenseItem name={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem name={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpenseItem name={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        <ExpenseItem name={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}/> */}
      </div>
    );
}

export default App;
