import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import item from './item';
import customer from './customer';
import supplier from './supplier';
import transaction from './transaction';
 

export default combineReducers({
  alert,
  auth,
   item,
   customer,
   supplier,
   transaction
});
