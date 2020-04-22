import React, { useEffect , Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import axios from 'axios'
import SupplierForm from './Form/SupplierForm'
import {getSuppliers} from '../action/supplier'
 
const SupplierS = ({getSuppliers,supplier:{suppliers,loading}})=>{
    useEffect(()=>{
        getSuppliers();
    },[getSuppliers]);

    return (
        <Fragment>
             <div id = "content" style= {{float:"left", width:"70%"}}>
              <div className ='container-fluid' style={{textAlign:'center'}}>
              <h1>SupplierList</h1>
                   {/* <main className ="App"> */}
               <table>
                 <tr>
                   <th>Company </th>
                   <th>Person</th>
                   <th>E-Mail</th>
                   <th>PhoneNum</th>
                   <th>address</th>
                 </tr>
                
                  { suppliers.length?
                   suppliers.map(supplier=>
                     <tr key={supplier._id}>
                       <td>{supplier.companyName}</td>  
                       <td>{supplier.personName}</td> 
                       <td>{supplier.email}</td>
                       <td>{supplier.phoneNum}</td>
                       <td>{supplier.address}</td>
                        </tr>
                   ):
                   null
                   }
                   </table>
                   {/* </main> */}
            </div>
            </div>
            <SupplierForm/>
        </Fragment>
    )
};

SupplierS.propTypes = {
    getSuppliers: PropTypes.func.isRequired,
    supplier: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    supplier: state.supplier
  });
  
  export default connect(
    mapStateToProps,
    { getSuppliers }
  )(SupplierS);
  