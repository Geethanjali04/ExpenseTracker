import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import NewExpense from "./components/NewExpenses/NewExpenses"; 
import React,{useState} from 'react';
const App=() =>{
  const dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

    { id: "e2", 
      title: "New TV", 
      amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];  
  const[expense,setexpense]=useState(dummy_expenses);
const addExpenseHandler=(expense)=>{ 
  setexpense((prev_expense)=>{
    return [expense,...prev_expense];
  })
  console.log(expense);
}
  return (
    <div className="colBc">
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expense}></Expenses>

    </div>
  );
}
export default App;
