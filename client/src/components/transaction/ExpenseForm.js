import React from 'react'
import {MdSend} from 'react-icons/md';
// itemName:"pen",itemId:"1",price:"123",amount:"2"
 const ExpenseForm = ({
    name,code, price, quantity, baseSellPrice ,taxRecv  ,finalSellPrice  ,discount ,
    handleName, handleId, handlePrice, handleAmount, handleBaseSellPrice, handleTaxRecv,
    handleFinalSellPrice, handleDiscount, 
    handleSubmit,
    edit
 }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
            <div className="form-group">
                    <label htmlFor="charge">ItemId</label>
                    <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    placeholder="e.g. 123"
                    value={code}
                    onChange={handleId}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">MRP</label>
                    <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Rs 125"
                    value={price}
                    onChange={handlePrice}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="charge">Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="e.g. book"
                    value={name}
                    onChange={handleName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="charge">Quantity</label>
                    <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="quantity"
                    placeholder="e.g. 5"
                    value={quantity}
                    onChange={handleAmount}
                    />
                </div>

                {/* ************after addition */}
            
                <div className="form-group">
                    <label htmlFor="charge">baseSellPrice</label>
                    <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="baseSellPrice"
                    placeholder="e.g. 4"
                    value={baseSellPrice}
                    onChange={handleBaseSellPrice}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="charge">taxRecv</label>
                    <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="taxRecv"
                    placeholder="e.g. 5"
                    value={taxRecv}
                    onChange={handleTaxRecv}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="charge">finalSellPrice</label>
                    <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="finalSellPrice"
                    placeholder="e.g. 5"
                    value={Number(baseSellPrice)+ Number(taxRecv)}
                    onChange={handleFinalSellPrice}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="charge">discount</label>
                    <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="discount"
                    placeholder="e.g. 5"
                    value={discount}
                    onChange={handleDiscount}
                    />
                </div>

            </div>
            <button type = "submit" className="btn"  style={{float:"right" , margin:"0"}}>
               { edit?"edit": "submit"}
                <MdSend className="btn-icon"/>
            </button>
        </form>
    )
}
export default ExpenseForm