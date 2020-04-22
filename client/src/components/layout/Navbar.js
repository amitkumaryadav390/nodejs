import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../action/auth';
import "../../App.css"
const Navbar = ({auth:{isAuthenticated,loading},logout}) => {
   const authLinks = (
    <div id = 'sidebar'>
    <header>
        <Link  to = '#'>My App</Link>
    </header>
    <ul className = 'nav'>
    <li className="zmdi zmdi-view-dashboard"><p><Link to='/transaction'>Billing</Link></p></li>
    <li className="zmdi zmdi-view-dashboard "><p><Link to='items'>ITEMS</Link></p></li>
    <li className="zmdi  zmdi-view-dashboard"><p><Link to='customers'>CUSTOMERS</Link></p></li>
    <li className="zmdi zmdi-view-dashboard "><p><Link to='suppliers'>SUPPLIERS</Link></p></li>
    <li className="zmdi zmdi-view-dashboard">
    <p><Link onClick = {logout}><span>Logout</span></Link></p>
    </li>
    </ul>
    </div>
   );
   const guestLinks = (
    <div id = 'sidebar'>
    <header>
        <Link  to = '#'>My App</Link>
    </header>
    <ul className="nav">
     <li className="zmdi zmdi-view-dashboard"><p><Link to='#!'>Home</Link></p></li>
    <li className="zmdi "><p><Link to='register'>REGISTER</Link></p></li>
    <li className="zmdi "><p><Link to='login'>LOGIN</Link></p></li>
    </ul>
    </div>
   );
   
    return (
        <div>
            <nav className="navstyle">
    {!loading && (<Fragment>{isAuthenticated ? authLinks:guestLinks}</Fragment>)}
            </nav> 
        </div>
    )
}
Navbar.prototype = {
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps,{logout})( Navbar);