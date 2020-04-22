import axios from 'axios';
import {
     
    GET_TRANSACTION,
    CREATE_TRANSACTION,
    EDIT_TRANSACTION,
    DELETE_TRANSACTION,
    TRANSACTION_ERROR
} from '../action/types';
const initialState = {
    transactions:[],
    transaction:null,
    loading:true,
    error:{}
}
 

export default function transaction(state= initialState,action) {
    const {type,payload} = action;
    switch(type){
        case GET_TRANSACTION:
            return {
                ...state,
                transactions:payload,
                loading:false
            };
        case CREATE_TRANSACTION:
            return{
                ...state,
                transactions:[...state.transactions,[payload]],
                loading:false
            }
        case  TRANSACTION_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
                };
        default:
            return state;
    }
    
}
