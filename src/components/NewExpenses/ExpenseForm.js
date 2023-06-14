import "./ExpenseForm.css";  
import React,{useState} from 'react'; 
const ExpenseForm =(props)=>{    

    const [enteredTitle, setEnteredTitle] = useState('') ;
    const onTitleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }  
    const [enteredDate, setEnteredDate] = useState('') ;
    const onDateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }  
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const onAmountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    } 
    const submitHandler = (event)=>{
        event.preventDefault(); 
        const newData = {title:enteredTitle,amount:+enteredAmount,date:new Date(enteredDate)}; 
       // console.log(newData);  

        setEnteredTitle('');
        setEnteredAmount(''); 
        setEnteredDate(''); 
        props.onNewDataSubmitted(newData);

    }
    return (<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label >title</label> 
            <input  type="text" value={enteredTitle} onChange={onTitleChangeHandler}/>
        </div>  
        <div className="new-expense__control" >
            <label>amount</label> 
            <input type="number" min='1' max='1000'value={enteredAmount} onChange={onAmountChangeHandler} />
        </div>  
        <div className="new-expense__control" >
            <label>date</label> 
            <input type="date" min='2019-01-01' max='2022-12-31'value={enteredDate} onChange={onDateChangeHandler}/>
        </div>
    </div>   
    <div className="new-expense__action">

        <button type='button' onClick={props.onStop}>Cancel</button>
        <button type='submit'>Add Expense</button>  
        
    </div>
    </form>);
};
export default ExpenseForm;