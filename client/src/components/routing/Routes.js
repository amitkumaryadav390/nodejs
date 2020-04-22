import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CustomerList from '../CustomerList'
import ItemList from '../ItemList'
import SupplierList from '../SupplierList'
import Dotransaction from '../Dotransaction'
import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Navbar from '../layout/Navbar';
// import {loadUser} from './action/auth';
import PrivateRoute from '../routing/PrivateRoute';
// import '../App.css'


const Routes = () =>{
    return (
        <section className='container'>
        <Alert/>
        <Switch>
          <Route exaxt path='/register'  component= {Register}/>
          <Route exact path='/login'  component= {Login}/>
          <PrivateRoute exact path='/transaction' exact component={Dotransaction}/>
          <PrivateRoute exact path='/items'  component= {ItemList}/>
          <PrivateRoute exact path='/customers'  component={CustomerList}/>
          <PrivateRoute exact path='/suppliers'  component={SupplierList}/>
        </Switch>
        </section>
    )
}
export default Routes;