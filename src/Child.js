import React, { useContext, useState } from 'react';
import './App.css';
import {TransactionContext} from './transcontext' ;


function Child() {

    let {transactions, addTransaction} = useContext(TransactionContext) ;

    let[newDesc ,setDesc] = useState("") ;
    let[newAmount ,setAmount] = useState() ;

    const handleAddition = (event) =>{
        event.preventDefault()
        if(Number(newAmount) === 0)
        {
            alert("Please Enter a correct value") ;
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })

        setDesc(' ');
        setAmount(' ');
    }


    const getIncome = () => {

        let income = 0 ;
        for ( var i =0 ; i < transactions.length; i++)
        {
            if (transactions[i].amount > 0)
            {
                income += transactions[i].amount 
            }
        }
        return income ;
    }

    const getExpense = () => {

        let Expense = 0 ;
        for ( var i =0 ; i < transactions.length; i++)
        {
            if (transactions[i].amount < 0)
            {
                Expense += transactions[i].amount 
            }
        }
        return Expense ;
    }

  return (
    <div className = "container">
        <h1 className = "text-center">EXPENSE TRACKER</h1>
        <h3 className = "balance">Your Balance <br/> ${getIncome() + getExpense()}</h3>

        <div className= "expense-container">
            <h3>Income <br/> ${getIncome()}</h3>
            <h3>Expense <br/> ${getExpense()}</h3>
        </div>

        <h3>History</h3><hr/>

        <ul className = "transaction-list">
            {transactions.map((transObj, ind) => {
                return (
                    <li key= {ind}>
                        <span>${transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                )
            })}
         
        </ul>

        <h3>Add New Transaction</h3><hr/>

        <form className = "transaction-form" onSubmit= {handleAddition}>
            <label>
                Enter Description <br/>
                <input type = "text" 
                value = {newDesc}
                placeholder= "Description"
                onChange={(ev)=>setDesc(ev.target.value)} 
                required/>
            </label>

            <label>
                <br/>Enter Amount <br/>
                <input type = "number"
                value = {newAmount} 
                placeholder= "Amount"
                onChange={(ev)=>setAmount(ev.target.value)} 
                required/>
            </label>
            <br/>
            <input type = "submit" value = "Add Transaction" />
        </form>

    </div>
  );
}

export default Child;
