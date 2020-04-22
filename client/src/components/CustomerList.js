import React, { useEffect ,useState,Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "../App.css"
import axios from 'axios'
import "./CustomerList.css"
import CustomerForm from './Form/CustomerForm'
import {getCustomers, filterByName} from '../action/customer'

import {getTransaction} from '../action/transaction';

const Customers = ({ getCustomers, customer:{customers,loading},getTransaction,transactions})=>{
useEffect(()=>{
    getCustomers();
    getTransaction();
},[ getCustomers,getTransaction]);

let initialselected = [];
let initialtransaction=[];
let selectedcustomerinfo=customers;
console.log("ransactions");
console.log(transactions);
let details =[];
const [customerSearchTerm, setCustomerSearchTerm] = useState("");

const [selectedcustomer, setselectedcustomer] = useState(initialselected);
const [selectedtransaction, setselectedtransaction] = useState(initialtransaction);
const handleCustomerSearch = e=>{
  setCustomerSearchTerm(e.target.value);
}
const [sortText,setSelectTerm] = useState("");

const [filtertext,setfiltertext] = useState("");
const [beginingrange,setBeginningRange]= useState(0);
const [endrange,setEndRange]= useState(0);


const handlebegining= e=>{

  if(e.target.value=="")
     setBeginningRange(0);
  else
     setBeginningRange(e.target.value);
}
const handleendrange= e=>{
  
  if(e.target.value=="")
  setEndRange(0);
  else
  setEndRange(e.target.value);
}

const handleFilter =()=> {
  var x = document.getElementById("myFilter").value;
  console.log("hii"+x);
  let  filteredCustomers;
 // setfiltertext(x);
  //console.log("hello"+sortText);
  if(x=="male")
    {
      setfiltertext(x)
    }
   else if(x=="female")
    {
      setfiltertext(x);
    }
   else if(x=="agebet0and50")
    {
      //setBeginningRange(0);
      //setEndRange(50);

      setfiltertext("age")
    }
    else if(x=="purchasegt5000")
    {
      //setBeginningRange(50000);
      //setEndRange(214000000000);

      setfiltertext("purchase")
    }
    else if(x=="noofbillgt5")
    {
     // setBeginningRange(5);
      //setEndRange(500);

      setfiltertext("noofbill")
    }
    
    else if(x=="avgbillgt1000")
    {
     // setBeginningRange(1000);
      //setEndRange(166666666660);

      setfiltertext("avgbill")
    }
    else
    setfiltertext("");
    console.log("filter"+filtertext);
}











const handleCustomersort =()=> {
  var x = document.getElementById("mySelect").value;
  
  //console.log("hii"+x);
  setSelectTerm(x);
  //console.log("hello"+sortText);
  if(x=="name")
    {
      customers.sort(compare);
     // console.log(customers);

      console.log(x);
    }
   else if(x=="age")
    {
      customers.sort(compareage)
    }
   else if(x=="email")
    {
      customers.sort(compareemail);
    }
    else if(x=="sellval")
    {
      customers.sort(comparesaleValue);
    }
    else if(x=="noofbill")
    {
      customers.sort(comparenoofbill);
    }
    else if(x=="avgbill")
    {
      customers.sort(compareavgbill);
    }
 //setSelectTerm(x);
}

 var filteredCustomers = customers.filter(
  (customer) => {
  if(
    (
      (customer.name.startsWith(customerSearchTerm) ) ||(customer.name.includes(" "+customerSearchTerm) ) ||
  (customer.address != undefined && customer.address.startsWith(customerSearchTerm) )||(customer.address != undefined && customer.address.includes(" " +customerSearchTerm) )||
  ( customer.address != undefined && customer.address.includes("," +customerSearchTerm) )||
   ( customer.email != undefined && customer.email.startsWith(customerSearchTerm)  
        || (customer.phoneNum != undefined &&customer.phoneNum.toString().startsWith(customerSearchTerm) )
   )
    )
     && (
       
      (filtertext==""  )||
       (filtertext=="male" &&customer.gender.toLowerCase()=="male" )||
       (filtertext=="female" &&customer.gender.toLowerCase()=="female" )||
       (filtertext=="age" &&customer.age >= beginingrange && customer.age <= endrange )||
       
       (filtertext=="noofbill" &&customer.noofbill >= beginingrange && customer.noofbill <= endrange )||
      (filtertext=="avgbill" &&(customer.saleValue/customer.noofbill) >= beginingrange && (customer.saleValue/customer.noofbill)<= endrange )||
       (filtertext=="purchase" &&customer.saleValue >= beginingrange && customer.saleValue <= endrange )
        
         )
         
         
    ) //if close 
         {
                  return customer;
        }         
}
)

const [customerinfoname,setcustomerinfoname] = useState("");
const [transaction1,settransaction1] = useState([]);
const [transactionlist,settransactionlist] = useState([]);

var customertransaction = (name)=>
{
  console.log("custname"+customerinfoname);
var filteredtransaction = transactions.filter((transaction)=>
{
   return transaction.customerName==name;
})

settransactionlist(filteredtransaction);
}
  
const showdetails=(id)=>
    {

      console.log("clicked"+id);
      var x = document.getElementById(id);
     
    if (x.style.display === "none") {

      
      customers.map(customer =>
        {
          //document.getElementById(customer._id).style.display= "none";
        })

      selectedcustomerinfo = customers.filter((customer)=>{
        return customer._id.toString()==id.toString();
        
      })
      //console.log("clicked customer");
             let name= selectedcustomerinfo[0].name;
             //setcustomerinfoname(name);setcustomerinfoname(name);
             
  console.log("custname"+customerinfoname);
             
             setselectedcustomer(selectedcustomerinfo);
             console.log(selectedcustomer)
             customertransaction(name);
      x.style.display = "block";
    } else {
      selectedcustomerinfo = customers;
   x.style.display = "none";
   }
    }
   
        return (
            <Fragment>
<div id = "content"  style= {{float:"left", width:"70%"}}>
            <div className ='container-fluid'>
     
<div className="row">
    <div className="col-lg-3" style={{paddingLeft : "120px"}}>          
<input type="text" size="10" placeholder="Search" value={customerSearchTerm} onChange={handleCustomerSearch} />
    </div>
    <div className="col-lg-4">
     <select onChange={handleCustomersort}   id="mySelect" style={{paddingLeft : "20px", width:"150px"}}>
    <option value="5"  selected >
       Sort By

    </option>
    <option value="name">
       By Name
</option>
    <option value="email">
       Email
</option >
    <option value="age">
       Age</option >  
        <option value="sellval">
      Purchase</option >
       <option value="noofbill">
       No of Bill</option >
       <option value="avgbill">
       Average Bill Value</option >
     </select>
</div>

<div className="col-lg-2" style={{paddingLeft : "12px"}}>          
<input type="text" size="5" placeholder="start value" value={beginingrange} onChange={handlebegining} />
    </div>
<div className="col-lg-2" >


<select onChange={handleFilter}  id="myFilter" style={{paddingLeft : "20px",width: "150px"}}>
<option value="nofilter"  selected >
       Filter Option

    </option>
    <option value="male">
       male
</option>
    <option value="female">
       female
</option >
    <option value="agebet0and50">
       Age </option >  
        <option value="purchasegt5000">
      Purchase </option >
       <option value="noofbillgt5">
       bill </option >
       <option value="avgbillgt1000">
       Average Bill</option >
     </select>


</div>

<div className="col-lg-1" style={{paddingLeft : "42px"}}>          
<input type="number" size="5" placeholder="Search" value={endrange} onChange={handleendrange} />
    </div>
</div>

{//console.log({selectedcustomer})

/*
selectedcustomer.map(customer =>(
  
        <table><tbody><tr><td>no of bills : {customer.noofbill}  </td><td>total sell:{customer.saleValue}</td><td>avg amount per bill:{customer.saleValue/customer.noofbill}</td></tr><tr>
               <td> past transactions 1</td><td>
                 &nbsp;</td><td>reprint bill</td> </tr><tr><td>past transactions 2</td><td>&nbsp; </td>
                <td>edit customer data</td>
   </tr></tbody></table> 
   
))
  */
  



} 

 <h1> List of Customer </h1>
                 {/* <main className="App"> */}
                   <table><tr><th>Name</th><th>Gender</th><th>Age</th><th>Email</th><th>Phone Number</th><th>address</th>
                   <td>No of Bills</td><td>Total Sale</td><td>avg sale</td>></tr>
                 
              { filteredCustomers.map(customer => (
                <tbody>              <tr  key = {customer._id} value={customer._id}  onClick={showdetails.bind(this,customer._id)} >
               <td >{customer.name}</td><td>{customer.gender}</td><td>{customer.age}</td><td>{customer.email}</td>
              <td>{customer.phoneNum}</td><td >{customer.address}</td><td >{customer.noofbill}</td><td >{customer.saleValue}</td><td>
                {customer.noofbill !=  0 ? (Number(customer.saleValue)/Number(customer.noofbill)).toFixed(2) : 0 }</td>
               </tr>
               <tr value={customer._id}  >
<td colSpan="9">              <div id={customer._id } style={{width :"660px",height:"auto",display : "none"}} >
               {selectedcustomer.map(customer =>(
  
  <table className="table table-bordered"><tbody>


  { /* <tr><td style={{width:"100px"}} >no of bills : {customer.noofbill}  </td > <td style={{width:"100px"}}></td><td>total sale:{customer.saleValue.toFixed(2)}</td>
    <td style={{width:"100px"}}></td>
  <td>amount per bill:{(customer.saleValue/customer.noofbill).toFixed(2)}</td><td></td><td></td><td></td>
  </tr>
               */ }

  <tr>
     <td>
       upi 
     </td>
     <td>
       app
     </td>
     <td>
       cash
     </td>
     <td>
       card
     </td>
     <td>
       total
     </td>
     <td>
       timestamp
     </td>
     <td>
     transaction id
     </td>
     <td>
       employee
     </td>
     <td>
       reprint
     </td>
     
   </tr>
 {transactionlist.map(transaction1 =>(
   
  <tr><td> {transaction1.upi} </td><td> {transaction1.app}  </td><td> {transaction1.cash}  </td>
  <td> {transaction1.card}  </td><td> {transaction1.card+transaction1.app+transaction1.cash+transaction1.upi}  </td>
               <td> {transaction1.Date}</td>
           
               <td style={{width:"220px"}}>{transaction1.transactionId}</td><td style={{width:"120px"}}>master</td>
  <td>reprint bill</td> </tr>

 ))
}

{/*  {<tr><td> {transaction2 != null ? transaction2.upi : "nill"} </td>
  <td> {transaction2 !=null  ? transaction2.app :" nill"}  </td><td>  {transaction2 != null ? transaction2.cash: "nill"}
    </td>
  <td> {transaction2 != null? transaction2.card :" nill"}  </td><td> {transaction2 != null? transaction2.Date :" nill"}</td>
   <td>{transaction2 != null? transaction2.transactionId:" nill"}</td> 
   <td style={{width:"120px"}}>qty : {transaction2 != null? transaction2.items.length:" nill"}</td> 
               <td>reprint bill</td>  </tr>*/}
    <tr><td>edit customer</td><td> </td>
          <td> </td><td></td><td> </td>
          <td> </td><td></td><td> </td>
          <td> </td>
</tr></tbody></table> 

))}
</div>
</td>
 
               </tr>
               </tbody>
  
               ))
              } </table></div></div>
            <CustomerForm/>
            </Fragment>
        )
function compare(a, b) {
          // Use toUpperCase() to ignore character casing
          const custa = a.name.toUpperCase();
          const custb= b.name.toUpperCase();
           
          let comparison = 0;
          if (custa > custb) {
            comparison = 1;
          } else if (custa < custb) {
            comparison = -1;
          }
          return comparison;
        }
        function compareemail(a, b) {
          // Use toUpperCase() to ignore character casing
          const custa = a.email.toUpperCase();
          const custb= b.email.toUpperCase();
        
          let comparison = 0;
          if (custa > custb) {
            comparison = 1;
          } else if (custa < custb) {
            comparison = -1;
          }
          return comparison;
        }
        function compareage(a, b) {
          // Use toUpperCase() to ignore character casing
          let comparison=0;
          const custa = Number(a.age);
          const custb= Number(b.age);
          if (custa > custb) {
            comparison = 1;
          } else if (custa < custb) {
            comparison = -1;
          }
          return comparison;
        }
        function comparesaleValue(a, b) {
          // Use toUpperCase() to ignore character casing
          let comparison=0;
          const custa = Number(a.saleValue);
          const custb= Number(b.saleValue);
          if (custa > custb) {
            comparison = 1;
          } else if (custa < custb) {
            comparison = -1;
          }
          return -comparison;
        }
        function comparenoofbill(a, b) {
          // Use toUpperCase() to ignore character casing
          const custa = Number(a.noofbill);
          let comparison=0;
          const custb= Number(b.noofbill);
          if (custa > custb) {
            comparison = 1;
          } else if (custa < custb) {
            comparison = -1;
          }
          return -comparison;
        }
        function compareavgbill(a, b) {
          // Use toUpperCase() to ignore character casing
          const custa = Number(a.noofbill)*Number(a.saleValue);
          let comparison=0;
          const custb= Number(b.noofbill)*Number(b.saleValue);
          if (custa > custb) {
            comparison = 1;
          } else if (custa < custb) {
            comparison = -1;
          }
          return -comparison;
        }




    }

     Customers.propTypes = {
         getCustomers: PropTypes.func.isRequired,
         getTransaction: PropTypes.func.isRequired,
         customer: PropTypes.object.isRequired,
         transaction :PropTypes.object.isRequired,
      };
      
      const mapStateToProps = state => ({
         customer: state.customer,
         transactions : state.transaction.transactions

         
         
      });
      
      export default connect(
        mapStateToProps,
        {getCustomers,getTransaction }
      )( Customers);
 
