import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import axios from 'axios'
import {addItem} from '../../action/item';
import {setAlert} from '../../action/alert';
// function Component
const ItemForm = ({addItem,setAlert, isAuthenticated }) => { 
const [formData,setFormData] = useState({
    name:'',
    code:'',
    MRP:'',
    quantity:'',
   baseSellPrice:0,
   taxRecv:0,
   finalSellPrice:0,
   baseBuyPrice:'',
   taxBuyPrice:'',
   discount :'',
   HSN:'',
   category:''
})
const {name ,code, MRP,quantity, baseSellPrice, taxRecv ,finalSellPrice ,
baseBuyPrice ,
finalBuyPrice,
HSN  ,discount,
category } = formData;
const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})

const onSubmit =async e=>{
    e.preventDefault()
// if(name === '' || code ==='' || MRP ===''||baseSellPrice ===''){
//     setAlert('Anything can not be empty','danger');
// }else {
//     setAlert('Item is created', 'success');
// }
 addItem(formData);
 setFormData({
     name:'',
     code:'',
     MRP:'',
     quantity:'',
     baseSellPrice:0,
   taxRecv:0,
   finalSellPrice:0,
   baseBuyPrice:'',
   finalBuyPrice:'',
   HSN:'',
   discount: '',
   category:''

 });
}
// if(!isAuthenticated){
//     return <Redirect to = ''/>;
// }
   
        return (
             
            <div style={{float:"right"}} >
                <h1>Add Item</h1>
               <form onSubmit={e => onSubmit(e)}>
                 <div>
                      <label for="itemName">Item name</label>
                      <input to ="itemName" type="text" placeholder="Item Name" name="name" value = {name} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder="Unique code" name="code" value = {code} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="number" placeholder ="MRP" name="MRP"  value = {MRP} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder ="quantity" name="quantity"  value = {quantity} onChange ={e =>onChange(e)}/>
                 </div>
                 <div>
                     <input type="number" placeholder = "baseSellPrice" name="baseSellPrice"  value = {baseSellPrice} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="number" placeholder = "taxRecv" name="taxRecv"  value = {taxRecv} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="number" placeholder = "finalSellPrice" name="finalSellPrice"  value = {parseInt(baseSellPrice)+parseInt(taxRecv)} onChange ={e =>onChange(e)}/>
                 </div>
                 <div>
                     <input type="text" placeholder = "baseBuyPrice" name="baseBuyPrice"  value = {baseBuyPrice} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder = "finalBuyPrice" name="finalBuyPrice"  value = {finalBuyPrice} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder = "HSN" name="HSN"  value = {HSN} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder = "discount" name="discount"  value = {discount} onChange ={e =>onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder = "category" name="category"  value = { category} onChange ={e =>onChange(e)}/>
                 </div>  
                 <button type="submit">Add item</button>  
               </form> 
            </div>
        )
    };


 ItemForm.prototype = {
     addItem:PropTypes.func.isRequired,
     setAlert:PropTypes.func.isRequired
 };
 const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
 export default connect(mapStateToProps,{addItem,setAlert})(ItemForm);