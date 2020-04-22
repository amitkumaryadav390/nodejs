import React from 'react'
import Item from "./ExpenseItem";
import {MdEdit,MdDelete} from "react-icons/md";
 
function ExpenseList({expenses,clearItems,buyItem,handleDelete, handleEdit}) {
    return (
       <> 
       <ul>  <li className="item">
            <div>
                {/* <span className="expense">Name</span>
                {/* <span>{itemId}</span> */}
                {/* <span className="amount">Price</span>
                <span style={{margin:25}}>Quantity</span>
                <span className="amount">Total Price</span> */} 

            <span className="expense" style={{padding:"15px"}}>code</span>
            <span className="expense" style={{padding:"5px"}}>price</span>
            <span className="expense">name</span>
                {/* <span>{itemId}</span> */}
            <span className="expense" style={{margin:"25px"}}>quantity</span>
            <span className="expense" style={{padding:"5px"}}>baseSellPrice</span>
            <span className="expense" style={{padding:"5px"}}>taxRecv</span>
            <span className="expense" style={{padding:"5px"}}>finalSellPrice</span>
            <span className="expense" style={{padding:"5px"}}>discount</span>
            <span className="expense" style={{margin:"5px"}}>price*quantity </span>
            </div>
            <button className = "expense edit-btn" aria-label="edit button"    >
               Edit
            </button>
            <button className = "clear-btn" aria-label="delete button"   >
               Delete
            </button>  
        </li>
           {expenses.map(expense =>{
               return <Item key = {expense.code} expense = {expense} handleDelete={handleDelete} handleEdit={handleEdit}/>
           })}
       </ul>
       {expenses.length > 0 &&(
           <div>
           <button className = 'btn' onClick={clearItems}>
               clear ExpenseList
               <MdDelete className = 'btn-icon'/>
           </button>
           <button className = 'btn' onClick={buyItem}>
               Add ExpeneList 
           <MdDelete className = 'btn-icon'/>
          </button>
       </div>
       )

       }
       </>  
    )
}

export default ExpenseList
