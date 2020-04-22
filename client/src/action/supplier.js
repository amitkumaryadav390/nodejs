import axios from 'axios';
import {
    GET_SUPPLIERS,
    CREATE_SUPPLIERS,
    SUPPLIERS_ERROR
} from './types';

// Get posts

export const getSuppliers = () => async dispatch =>{
    try {
        const res = await axios.get('api/supplier');
        dispatch ({
            type: GET_SUPPLIERS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:SUPPLIERS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// CREATE ITEM
export const addSupplier = FormData => async dispatch =>{
   const config = {
       headers:{
           'Content-Type':'application/json'
       }
   };
   
   try {
    const res= await axios.post('/api/supplier',FormData,config);
    dispatch({
        type:CREATE_SUPPLIERS,
        payload:res.data
    });
    // dispatch(setAlert('Post Created','success'));   
} catch (err) {
       dispatch({
           type:SUPPLIERS_ERROR,
           payload: {   msg: err.response.statusText, status: err.response.status }
       });
   }
};