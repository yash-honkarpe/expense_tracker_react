import './App.css';
import React, { useState } from 'react';

function App() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList]= useState([])

  const addExpense=()=>{
    if(!expense || !amount) return;

    const newList={
      id:list.length+1,
      title: expense,
      amount : amount
    };
    setList([...list,newList])
    setExpense('')
    setAmount('')
  }

  const removeExpense=(id)=>{
    setList(list.filter((list)=>list.id!==id))
  }
  return (
    <div className='container'>
      <h2>Expense Tracker</h2>
      <div id="input-div">
        <input className='user-input' type="text" placeholder="Enter Expense" value={expense} onChange={(e) => setExpense(e.target.value)} />
        <input className='user-input' type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className='user-input' id="add-btn" onClick={addExpense}>Add Expense</button>
      </div>
      <div className='output'>
      <ul className='expense-list'>
        {
          list.map((exp)=>(
            <li key={exp.id}>
              <span id="sp1">{exp.title}</span>
              <span id="sp2"> ₹{exp.amount}</span>
              <button id="remove-btn" onClick={()=>removeExpense(exp.id)}>Remove</button>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  );
}

export default App;