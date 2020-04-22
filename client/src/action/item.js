import axios from 'axios';
import {
    GET_ITEMS,
    CREATE_ITEMS,
    ITEM_ERROR
} from './types';

// Get posts

export const getItems = () => async dispatch =>{
    try {
        const res = await axios.get('api/item');
        dispatch ({
            type:GET_ITEMS,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type:ITEM_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// CREATE ITEM
export const addItem = FormData => async dispatch =>{
   const config = {
       headers:{
           'Content-Type':'application/json'
       }
   };
   
   try {
    const res= await axios.post('/api/item',FormData,config);
    dispatch({
        type:CREATE_ITEMS,
        payload:res.data
    });
    // dispatch(setAlert('Post Created','success'));   
} catch (err) {
       dispatch({
           type:ITEM_ERROR,
           payload: {   msg: err.response.statusText, status: err.response.status }
       });
   }
};