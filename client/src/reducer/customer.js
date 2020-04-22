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
} from '../action/types';


const initialState = {
     customers:[],
     customer:null,
    loading:true,
    error:{}
};

export default function (state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case  GET_CUSTOMERS:
            return{
                ...state,
                 customers:payload,
                loading:false
            };
        case  CREATE_CUSTOMERS:
            return{
                ...state,
                 customers:[payload,...state.customers],
                loading:false
            };

            case  FILTER_CUSTOMERS_BY_NAME:

                let value = action.payload;
                console.log("value "+value);
                /*let filteredValues = state.products.filter(product => {
                    //return any product whose name or designer contains the input box string
                    return product.name.toLowerCase().includes(value) ||
                        product.designer.toLowerCase().includes(value);
                });-*/
               /* return {
                    ...state,
                    products: filteredValues,*/
                return{
                    ...state,
                     customers:[payload,...state.customers],
                    loading:false
                };
        case  CUSTOMERS_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            };


            case  SORT_CUSTOMERS_BY_NAME:
                return{
                    ...state,
                    error:payload,
                    loading:false
                };
            

                case  SORT_CUSTOMERS_BY_AGE:
                    return{
                        ...state,
                        error:payload,
                        loading:false
                    };
                case  SORT_CUSTOMERS_BY_PHONE:
                        return{
                            ...state,
                            error:payload,
                            loading:false
                        };
                case  SORT_CUSTOMERS_BY_EMAIL:
                            return{
                                ...state,
                                error:payload,
                                loading:false
                            };
        default:
            return state;
    }
}