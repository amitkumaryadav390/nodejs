import React,{Fragment,useState,useEffect} from 'react'
 import "../App.css"
 import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 
 import {MdSend} from 'react-icons/md';
 import ExpenseForm from'./transaction/ExpenseForm'
 import ExpenseItem from'./transaction/ExpenseItem'
 import ExpenseList from'./transaction/ExpenseList'
 import Alert from'./transaction/Alert'
import uuid from "uuid/v4"
import {getItems} from '../action/item'
 import {addTransaction} from '../action/transaction';
 import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { set } from 'mongoose';
import { getCustomers } from '../action/customer';
 const initialExpenses = []
 var netPyble = 0;
 var acc = 0;
// import useState()

// function return [] with two values
// the actual value of the state
// function for update/control
// default valuems,customers,a
  const Dotransaction = ({getItems,getCustomers
    ,addTransaction,items,customers,auth,isAuthenticated}) => {
    //  ******************** state values ***************
    // all expenses, add expense

    useEffect(()=>{
        getItems(); getCustomers();
    },[getItems,getCustomers]);

      const [expenses,setExpenses] = useState(initialExpenses);
    // single itemName
      const [name,setName] = useState('');
    // single itemId
    //   const [ code,setId] = useState('');
    // single item price
      const [price,setPrice] = useState('');
    // single number of item(i.e  quantity)
      const [ quantity,setAmount] = useState('');
    //  alert
      const [alert,setAlert] = useState({show:false});
// edit
     const [edit,setEdit] = useState(false);
// edit item
     const [code,setId] = useState('');

// ********new addition**************
    //  base sell price
    const [baseSellPrice,setBaseSellPrice] = useState('');
    // tax recv 
    const [taxRecv,setTaxRecv]  = useState('');
    // final sell price
    const [ finalSellPrice,setFinalSellPrice] = useState('');
    // discount
    const [discount,setDiscount] = useState('');
    //    other charges
    const [othercharges,setOtherCharges] = useState(0);
    // other discount
    const [otherDiscount,setOtherDiscount] =useState(0);
    // by cash
    const [cash,setCash] = useState(0);
    // by UPI
    const [upi,setUPI] = useState(0);
    // by Card
    const [card,setCard] = useState(0);
    //   ******************functionality********************
    const handleName = e =>{
        // console.log(e.target.value);
        // console.log(`name: ${e.target.value}`)
        setName(e.target.value)
    }
    const handleId = e =>{
        setId(e.target.value)
    }
    const handlePrice = e =>{
        setPrice(e.target.value)
    }
    const handleAmount = e =>{
        setAmount(e.target.value)
    }
    // ************** after addition*************
    const handleBaseSellPrice = e =>{
        setBaseSellPrice(e.target.value);
    }
    const handleTaxRecv = e => {
        setTaxRecv(e.target.value);
    }
    const handleFinalSellPrice = e =>{
        setFinalSellPrice(e.target.value);
    }
    const handleDiscount = e =>{
        setDiscount(e.target.value);
    }
    const handleOtherCharges = e =>{
        // console.log(`otherCharges : ${e.target.value}`)
        setOtherCharges(e.target.value);
    }
    const handleOtherDiscont  = e =>{
        setOtherDiscount(e.target.value);
    }
    const handleCash = e =>{
        setCash(e.target.value);
    }
    const handleUPI = e =>{
        setUPI(e.target.value);
    }
    const handleCard = e =>{
        setCash(e.target.value);
    }
// handle alert
 const handleAlert = ({type,text}) => {
     setAlert({show:true,type,text});
     setTimeout(()=>{
         setAlert({show:false});
     },3000);
 };
    // for submit 
    
    const handleSubmit = e =>{
        // console.log(name, code,price, quantity);
        e.preventDefault();
        if( code !== ''  &&  quantity > 0){
            if(edit){
                 
                let tempExpenses = expenses.map(item => {
                    if(item.code ===  code &&item.name === name && item.price ===price &&
                        item.baseSellPrice === baseSellPrice && item.taxRecv === taxRecv &&
                        item.finalSellPrice === finalSellPrice){ 
                       return {...item  , quantity ,discount}}
                    else{
                        handleAlert({type:'danger',text:"only quantity and discount can be change" });
                     return  item }
                });
               
                setExpenses(tempExpenses);
                setEdit(false);
            }else{
                const singleExpense = {name,code,price, quantity,baseSellPrice,taxRecv,finalSellPrice,discount};
                setExpenses([...expenses, singleExpense ]);
                handleAlert({type:'success',text:"item added"});
            }
            setName("");
            setId("");
            setPrice("");
            setAmount("");
            setBaseSellPrice("");
            setTaxRecv("");
            setFinalSellPrice("");
            setDiscount("");
            setOtherCharges("");
            setOtherDiscount("");
            setCash("");
            setUPI("");
            setCard("");
        }else{
            //handle alert called
            handleAlert({type:'danger',text:"anything cann't be empty"});
        }
    }

    // clear all items
    const clearItems = () =>{
        setExpenses([]);
        setAlert({type:'danger',text:"All items are deleted"});
        acc= 0;
        netPyble = 0;
    }
    // handle delete
    const handleDelete =  code =>{
        let tempExpenses = expenses.filter(item => item. code !==  code)
        setExpenses(tempExpenses);
        setAlert({type:'danger',text:"item is deleted"});
    }
     // handle edit
    const handleEdit =  code =>{
        let expense = expenses.find(item=> item. code ===  code)
        let { name,price, quantity,baseSellPrice,taxRecv,finalSellPrice,discount} = expense;
        setName(name);
        setPrice(price);
        setAmount( quantity);   
        setBaseSellPrice(baseSellPrice);
        setTaxRecv(taxRecv);
        setFinalSellPrice(finalSellPrice);
        setDiscount(discount);
        setEdit(true);
        setId( code);
    }

    // Buy items
    // const [formData,setFormData] = useState
    const buyItem = async e=>{
        e.preventDefault();
        console.log(expenses);
        addTransaction(expenses);
        setExpenses([]);
        setName("");
        setId("");
        setPrice("");
        setAmount("");
        setBaseSellPrice("");
        setTaxRecv("");
        setFinalSellPrice("");
        setDiscount("");
        setAlert({type:'success',text:"All items are added"});
        acc = 0;
        netPyble = 0;
    }  
    const people = [
        "Siri",
        "Alexa",
        "Google",
        "Facebook",
        "Twitter",
        "Linkedin",
        "Sinkedin"
      ];
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e => {
      setSearchTerm(e.target.value);
    };
    
    const handleSelect = e =>
    {
        console.log(e.target.value);
    }
    React.useEffect(() => {
      const results = people.filter(person =>
        person.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);
    console.log(items )
     return (
        
         <div  code="content">
             <div className = "container-fluid">
             {alert.show&& <Alert type={alert.type} text ={alert.text}/>}
             <h1 className="App" style={{color:"black"}}>BILLING</h1>
             {/* dropdown */}
             <div ><input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      </div>
            <FormGroup>
             <select style={{width:"85px", float:"left"}} onChange={handleSelect}>
              {items.map(item => (
               <option
               key={item.code}
               value={item.code}
               >
              {item.name}
             </option>
             ))}
           </select>

           </FormGroup>



           {/* for customer */}
           <select style={{width:"85px", float:"left"}}>
              {customers.map(customer => (
               <option
               key={customer.email}
               value={customer.name}
               >
              {customer.name}
             </option>
             ))}
           </select>
            
              {/* dropdown */}
             <main className="App">
             
               <ExpenseForm
               name={name}  code={ code} price={price}  quantity={ quantity} baseSellPrice= {baseSellPrice} taxRecv = {taxRecv}
               finalSellPrice= {finalSellPrice} discount={discount}
               handleName={handleName} handleId={handleId} handlePrice={handlePrice} handleAmount={handleAmount}
               handleSubmit={handleSubmit} handleBaseSellPrice={handleBaseSellPrice} handleTaxRecv= {handleTaxRecv} 
               handleFinalSellPrice={handleFinalSellPrice} handleDiscount={handleDiscount}
               edit={edit}
               />
               <ExpenseList expenses = {expenses} handleEdit={handleEdit} handleDelete={handleDelete} clearItems={clearItems}
                buyItem= {buyItem} />
             </main>
             <h2 style={{float:"right" }}>
                 Total Price :{" "}
                 <span className = "total">
                     Rs.{netPyble=
                     expenses.reduce((acc,curr)=>{
                         return (acc += Number(curr. quantity*(Number(curr.baseSellPrice)+Number(curr.taxRecv))));
                     },0)}
                    
                 </span>
                 <form>
                   <div>
                    other charges : 
                    <span>
                    <input
                    type="number"
                    // className="form-control"
                    style={{width :"65px"}}
                    id="price"
                    name="otherCharges"
                    placeholder="Rs 125"
                    value={othercharges}
                    onChange={handleOtherCharges}
                    />
                    
                </span>
                </div>
                <div>
                other discount : 
                    <span>
                    <input
                    type="number"
                    // className="form-control"
                    style={{width :"65px"}}
                    id="price"
                    name="otherdiscount"
                    placeholder="Rs 125"
                    value={otherDiscount}
                    onChange={handleOtherDiscont}
                    />
                    
                </span>
                </div>
                 </form>
                 net payble :{" "}
                 <span className = "total">
                 Rs.{netPyble=
                     expenses.reduce((acc,curr)=>{
                         return (acc += Number(Number(curr. quantity)*(Number(curr.baseSellPrice)+Number(curr.taxRecv))));
                     },0)}
                    
                 </span>
  {/* for payment mode */}
          <form onSubmit={handleSubmit}>
            <div className="form-center">
                 <div className="form-group" style={{float:"left"}}>
                    <label htmlFor="amount">cash</label>
                    <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="cash"
                    placeholder="Rs 125"
                    value={cash}
                    onChange={handleCash}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">UPI</label>
                    <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="upi"
                    placeholder="Rs 125"
                    value={upi}
                    onChange={handleUPI}
                    />
                </div>
                <div className="form-group" style={{float:"right"}}>
                    <label htmlFor="amount"> Card</label>
                    <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="card"
                    placeholder="Rs 125"
                    value={card}
                    onChange={handleCard}
                    />
                </div>
                </div>
                </form>
                 {/* <button type = "submit" className="btn" style={{}}>
                 Buy
                <MdSend className="btn-icon" />
                </button>   */}
             </h2>
             </div>
             </div>
     )
 }

 Dotransaction.propTypes = {
    getItems: PropTypes.func.isRequired,
    getCustomers:PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
  };
 const mapStateToProps = state =>({
     items:state.item.items,
     customers:state.customer.customers
 })
 
 export default connect(mapStateToProps,{addTransaction,getItems,getCustomers})(Dotransaction);