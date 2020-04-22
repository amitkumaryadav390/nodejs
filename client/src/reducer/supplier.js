import axios from 'axios';
import {
    GET_SUPPLIERS,
    CREATE_SUPPLIERS,
    SUPPLIERS_ERROR
} from '../action/types';


const initialState = {
    suppliers:[],
    supplier:null,
    loading:true,
    error:{}
};

export default function (state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case GET_SUPPLIERS:
            return{
                ...state,
                suppliers:payload,
                loading:false
            };
        case CREATE_SUPPLIERS:
            return{
                ...state,
                suppliers:[payload,...state.suppliers],
                loading:false
            };
        case SUPPLIERS_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            };
        default:
            return state;
    }
}