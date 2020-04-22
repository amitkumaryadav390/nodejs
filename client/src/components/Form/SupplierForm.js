import React, { Fragment, useState } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios'
import {addSupplier} from '../../action/supplier';
import {setAlert} from '../../action/alert';

const SupplierForm =({addSupplier,setAlert,isAuthenticated})=> {
    const [formData,setFormData] = useState({
        companyName:'',
        personName:'',
        email:'',
        phoneNum:'',
        address:'',
    })
 const {companyName,personName,email,phoneNum,address} = formData;
 const  onChange = e => setFormData({...formData,[e.target.name]:e.target.value});

 const  onSubmit = async e =>{
     e.preventDefault();
    addSupplier(formData);
    if(companyName===''|| personName===''|| email===''|| phoneNum===''|| address===''){
       setAlert('Anything cannot be empty','danger');
    }else{
        setAlert('Supplier is created','success');
     setFormData( {
         companyName:'',
         personName:'',
         email:'',
         phoneNum:'',
         address:''
     });
    }
 }
//  if(!isAuthenticated){
//     return <Redirect to = ''/>;
// }
    return (
        <div style= {{float:"right"}}>
            <h1>Add Supplier</h1>
            <form onSubmit={e =>  onSubmit(e)}>
                 <div>
                     <input type="text" placeholder="companyName" name="companyName" value = {companyName} onChange ={e => onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder="personName" name="personName" value = {personName} onChange ={e => onChange(e)}/>
                 </div> 
                 <div>
                     <input type="email" placeholder="email" name="email" value = {email} onChange ={e => onChange(e)}/>
                 </div> 
                 <div>
                     <input type="text" placeholder ="phoneNum" name="phoneNum"  value = {phoneNum} onChange ={e => onChange(e)}/>
                 </div> 
                 <div>
                     <input type="textarea" placeholder = "address" name="address"  value = {address} onChange ={e => onChange(e)}/>
                 </div> 
                 <button type="submit">Add Supplier</button>  
               </form> 
        </div>
    
    )
}
SupplierForm.prototype = {
    addItem:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
export default connect(mapStateToProps,{addSupplier,setAlert}) (SupplierForm);
