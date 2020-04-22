import axios from 'axios';
 
import {GET_ITEMS,
    CREATE_ITEMS,
     ITEM_ERROR } from '../action/types';


const initialState = {
    items:[],
    item:null,
    loading:true,
    error:{}
};

export default function (state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case GET_ITEMS:
            return{
                ...state,
                items:payload,
                loading:false
            };
        case CREATE_ITEMS:
            return{
                ...state,
                items:[payload,...state.items],
                loading:false
            };
        case ITEM_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            };
        default:
            return state;
    }
}