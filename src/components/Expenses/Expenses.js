import React from 'react';
import ExpenseItem from './ExpenseItem'; 
import './Expenses.css';
import ExpenseList from './ExpenseList'
import Card from '../UI/Card';  
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) =>
{  
    const [filteredYear,setFilteredYear] = useState(2020); 
    const onDropDownHandler=(selectedYear)=>{
        setFilteredYear(selectedYear); 
    }; 

    const filteredExpense=props.item.filter((expense)=>{
        return expense.date.getFullYear().toString()==filteredYear;
    })   

return (<div><Card className="expenses">   

<ExpensesFilter selected={filteredYear} onDropDownChange={onDropDownHandler}/> 
<ExpensesChart expenses={filteredExpense}/>
<ExpenseList items={filteredExpense}/>
</Card></div>);
} 

export default Expenses;