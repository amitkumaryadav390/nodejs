import axios from 'axios';
import {
     
    GET_TRANSACTION,
    CREATE_TRANSACTION,
    EDIT_TRANSACTION,
    DELETE_TRANSACTION,
    TRANSACTION_ERROR
} from './types';

// get all transaction
 export const getTransaction = () =>async dispatch=>{
  try {
    const res = await axios.get('api/transaction');
     dispatch ({
         type:GET_TRANSACTION,
         payload:res.data
     })
} 
catch (err) {
   dispatch({
       type:TRANSACTION_ERROR,
       payload: { msg: err.response.statusText, status: err.response.status }
     });
  }
 }
/*

 export const getCustomers = () => async dispatch =>{
    try {
        const res = await axios.get('api/customer');
        dispatch ({
            type: GET_CUSTOMERS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: CUSTOMERS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
*/
// Create transaction
 

// export const   addTransaction = FormData => async dispatch => {
//     const config = {
//         headers:{
//         'Content-Type':'application/json',
//     }
//     };
//     try {
//         const res = await axios.post('/api/transaction/customer',FormData,config);
//         dispatch({
//             type:CREATE_TRANSACTION,
//             payload:res.data
//         });  
//     } catch (err) {
//         dispatch({
//             type:TRANSACTION_ERROR,
//             payload: {   msg: err.response.statusText, status: err.response.status }
//         });
//     }
// };

export const addTransaction = FormData => async dispatch =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    };
    
    try {
     const res= await axios.post('/api/transaction/customer',FormData,config);
     dispatch({
         type:CREATE_TRANSACTION,
         payload:res.data
     });
     // dispatch(setAlert('Post Created','success'));   
 } catch (err) {
        dispatch({
            type:TRANSACTION_ERROR,
            payload: {   msg: err.response.statusText, status: err.response.status }
        });
    }
 };


