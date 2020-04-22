import React,{Fragment,useEffect} from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
 
import Navbar from './components/layout/Navbar';
import {loadUser} from './action/auth';
import './App.css'

import Routes from './components/routing/Routes';

// redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]); 
  return (
    //  <div style = {{textAlign:"center"}}>
    //    <container>
    //    <Dotransaction/>
    //    <CustomerList/>
    //    <ItemList/>
    //    <SupplierList/>
    //    </container>
    //  </div>
    <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Navbar/>
        {/* <section className='container'>
        <Alert/>
        <Switch>
          <Route path='/' exact component={Dotransaction}/>
          <Route path='/items'  component= {ItemList}/>
          <Route path='/customers'  component={CustomerList}/>
          <Route path='/suppliers'  component={SupplierList}/>
          <Route path='/register'  component= {Register}/>
          <Route path='/login'  component= {Login}/>
        </Switch>
        </section> */}
        <Route component={Routes} />
      </Fragment>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
