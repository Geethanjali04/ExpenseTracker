import React,{useState} from 'react';  
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
const NewExpenses =(props)=>{  
    const onNewDataChanged=(enteredExpenseData)=>{ 
        const expenseData = {
            ...enteredExpenseData,id:Math.random().toString()
        }; 
        props.onAddExpense(expenseData);

    };  
    const[isEditing,setIsEditing]=useState(false); 

    const onAddExpenseHandler=()=>{
        setIsEditing(true);
    };
    const onStopHandler=()=>{
        setIsEditing(false);
    };

    return (<div className='new-expense'>  

        {!isEditing && <button  onClick={onAddExpenseHandler} >Add New Expense</button>}   
        {isEditing && <ExpenseForm onNewDataSubmitted={onNewDataChanged} onStop={onStopHandler}/> }
    </div>);
}; 
export default NewExpenses;