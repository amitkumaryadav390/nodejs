import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import axios from 'axios'
import {addCustomer} from '../../action/customer';
import {setAlert} from '../../action/alert';
const CustomerForm = ({addCustomer,setAlert,auth,isAuthenticated}) =>{
    const [formData, setFormData] = useState({
        name:'',
        gender:'',
        age:'',
        email:'',
        phoneNum:'',
        address:'',
        auth:''
    })

    const {name,gender,age,email,phoneNum,address} = formData;
    const  onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    const  onClick = e => setFormData({...formData,[e.target.name]:e.target.value})
    // const  onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    const  onSubmit = async e=>{
        e.preventDefault()
        if( name==='') setAlert('anyting can not be empty','danger');
        /*else if(phoneNum.length != 10 || isNaN(phoneNum))
        {
            setAlert('fill correct contact number','danger');

        }
        else if( isNaN(age))
        {
            setAlert('age must be a number','danger');

        }
        
        else if(gender.toLowerCase()!= "male" && gender.toLowerCase()!= "female" && gender.toLowerCase()!= "others")
        {
            setAlert('You can write only male femal or others in gender field','danger');
       
        }*/
        else{
            console.log(formData);
        addCustomer(formData);
        setAlert('Customer is created','success');
        setFormData( {
            name:'',
            gender,
            age,
            email:'',
            phoneNum:'',
            address:''
        });  
      }  
    }
    // if(!isAuthenticated){
    //     return <Redirect to = ''/>;
    // }
    return (
         
             <div style= {{float:"right"}} >
                <h1>Add Customer</h1>
               <form onSubmit={e =>  onSubmit(e)}>
                 <div>
                     <input type="text" required placeholder="name"  required name="name" value = {name} onChange ={e => onChange(e)}/>
                 </div> 
               { /* <div>
                     <select type="input" name="gender" id="gender" onChange ={e => onChange(e)} style={{width:"185px"}}>
                     <option    value = "male" >male</option>
                     <option    value = "female" >female</option>
                     <option    value = "others" >others</option></select>
                 </div>*/
               }
               <div>
                
                {//<input type="text" placeholder ="male female or others" name="gender"  value = {gender} onChange ={e => onChange(e)}/>
}
                </div> 
                <div style={{paddingLeft :"60px"}}>
           <tbody>          <tr>  <td>   
                    
                <input type="radio" id="male" name="gender"  value="male" onClick ={e => onChange(e)} />&nbsp;&nbsp; Male
                        </td> 
                       <td>
                       <input type="radio" id="female" name="gender" value="female" onClick ={e => onChange(e)}/>
                        Female
                      
                        </td> 
                        <td>                       
                       <input type="radio" id="others" name="gender" value="others" onClick ={e => onChange(e)}/>Others
                        
               </td>
                </tr>
                </tbody>
                </div>

                 <div>
                
                 <input type="number"  maxlength="3"  placeholder ="age" name="age" value = {age} onChange ={e => onChange(e)}/>
                  
                 </div>
                 <div>
                     <input type="text" placeholder="email" name="email" value = {email} onChange ={e => onChange(e)}/>
                 </div> 
                 {/* pattern="[1-9]{1}[0-9]{9} */}
                 <div>
                     <input type="number" maxlength="10" pattern="[1-9]{1}[0-9]{9}" placeholder ="Phone Number" name="phoneNum"  value = {phoneNum} onChange ={e => onChange(e)}/>
                 </div> 
                 <div>
                      <textarea  placeholder = "address" name="address"  value = {address} onChange ={e => onChange(e)}/>
                 </div> 
                 <button className="btn btn-primary" type="submit">Add Customer</button>  
               </form> 
            </div>
        
    )
}

CustomerForm.prototype = {
    addCustomer:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
  });
  
 
export default connect(null,{addCustomer,setAlert})(CustomerForm);