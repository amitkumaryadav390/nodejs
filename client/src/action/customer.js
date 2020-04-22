import axios from 'axios';
import {
     GET_CUSTOMERS,
     CREATE_CUSTOMERS,
     CUSTOMERS_ERROR,
      SORT_CUSTOMERS_BY_NAME,
      SORT_CUSTOMERS_BY_AGE,
      SORT_CUSTOMERS_BY_PHONE,
      FILTER_CUSTOMERS_BY_NAME,
      SORT_CUSTOMERS_BY_MOBILE,
      SORT_CUSTOMERS_BY_EMAIL,
} from './types';

// Get posts

/*
JavaScript
const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const LOAD_DATA = "LOAD_DATA";
const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const sortByPrice = payload => ({
   type: SORT_BY_PRICE,
   payload
});
export const filterByPrice = payload => ({
   type: FILTER_BY_PRICE,
   payload
});
export const sortByAlphabet = payload => ({
   type: SORT_BY_ALPHABET,
   payload
});
export const loadData = (payload) => ({
   type: LOAD_DATA,
   payload
});
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const LOAD_DATA = "LOAD_DATA";
const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const sortByPrice = payload => ({
   type: SORT_BY_PRICE,
   payload
});
export const filterByPrice = payload => ({
   type: FILTER_BY_PRICE,
   payload
});
export const sortByAlphabet = payload => ({
   type: SORT_BY_ALPHABET,
   payload
});
export const loadData = (payload) => ({
   type: LOAD_DATA,
   payload
});

*/



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

export const sortbyname = () => async dispatch =>{
    try {
        const res = await axios.get('api/customer');
        dispatch ({
            type: SORT_CUSTOMERS_BY_NAME,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: CUSTOMERS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const filterByName = (payload) => async dispatch =>{
    console.log("val");
   console.log(payload);
      //  const res = await axios.get('api/customer');
        dispatch ({
            type: FILTER_CUSTOMERS_BY_NAME,
            payload
        })
    
 
}


/*
export const filterByName = payload => (
  
   dispatch( {
    type: FILTER_CUSTOMERS_BY_NAME,
    payload
 }));*/
export const sortbyage = () => async dispatch =>{
    try {
        const res = await axios.get('api/customer');
        dispatch ({
            type: SORT_CUSTOMERS_BY_AGE,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: CUSTOMERS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
export const sortbyphone = () => async dispatch =>{
    try {
        const res = await axios.get('api/customer');
        dispatch ({
            type: SORT_CUSTOMERS_BY_PHONE,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: CUSTOMERS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
export const sortbyemail= () => async dispatch =>{
    try {
        const res = await axios.get('api/customer');
        dispatch ({
            type: SORT_CUSTOMERS_BY_EMAIL,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: CUSTOMERS_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// CREATE ITEM
export const addCustomer = FormData => async dispatch =>{
    // const userToken =  JSON.parse(localStorage.getItem('token'));
   const config = {
       headers:{
            'Accept' : 'application/json',
           'Content-Type':'application/json',
           
       }
   };
   
   try {
    const res= await axios.post('/api/customer',FormData,config);
    dispatch({
        type: CREATE_CUSTOMERS,
        payload:res.data
    });
    // dispatch(setAlert('Post Created','success'));   
} catch (err) {
       dispatch({
           type: CUSTOMERS_ERROR,
           payload: {   msg: err.response.statusText, status: err.response.status }
       });
   }
};