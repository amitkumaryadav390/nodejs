import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md';

function ExpenseItem({expense,handleEdit,handleDelete}) {
    const { code,name, price,quantity,baseSellPrice,taxRecv,finalSellPrice,discount} = expense
    return (
        <li className="item">
            <div>
            <span className="expense" style={{padding:"5px"}}>{code}</span>
            <span className="expense" style={{padding:"45px"}}>{price}</span>
            <span className="expense">{name}</span>
                {/* <span>{itemId}</span> */}
            <span className="expense" style={{paddingLeft:"25px"}}>{quantity}</span>
            <span className="expense" style={{paddingLeft:"25px"}}>{baseSellPrice}</span>
            <span className="expense" style={{paddingLeft:"25px"}}>{taxRecv}</span>
            <span className="expense" style={{paddingLeft:"25px"}}>{Number(baseSellPrice)+Number(taxRecv)}</span>
            <span className="expense" style={{paddingLeft:"25px"}}>{discount}</span>
            <span className="expense" style={{margin:"50px"}}>{Number(quantity)*(Number(baseSellPrice)+Number(taxRecv))}</span>
            </div>
            <button className = "expense edit-btn" aria-label="edit button"   onClick={() => handleEdit( code)}>
                <MdEdit/>
            </button>
            <button className = "clear-btn" aria-label="delete button"  onClick={() => handleDelete( code)}>
                <MdDelete/>
            </button>  
        </li>
    )
}

export default ExpenseItem
