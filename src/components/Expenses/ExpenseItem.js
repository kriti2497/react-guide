import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'

const ExpenseItem = (props) => {
//     // year,month, date starts at 0 so actually we have 2022, 3, 28
// const expenseDate = new Date(2021, 2, 27);
// const expenseTitle = 'Car Insurance';
// const expenseAmt = 400.67;

  // const [title, setTitle] = useState(props.name)

  // const changeTitleHandler = () => {
  //   console.log(title)
  //   setTitle('Updated')
  //   console.log('Clicked')
  // }

  //STATELESS COMPONENT -> no state, just there to output some data
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={changeTitleHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
