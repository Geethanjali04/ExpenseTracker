import ExpenseItem from "../Expenses/ExpenseItem";
import './ExpenseList.css';
const ExpenseList = (props)=> {let expenseContent = <p>no expense found</p> 
if(props.items.length==0)
{
    return <h1 className="expenses-list__fallback">No Expenses Found</h1>
}

return (<ul className="expenses-list">{props.items.map((expense)=>(<ExpenseItem 
    key={expense.id}
    title={expense.title}
    amount={expense.amount} 
    date={expense.date}/>))}</ul>);

} 
export default ExpenseList;