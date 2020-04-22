import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../action/alert';
import { login } from '../../action/auth';
import PropTypes from 'prop-types';


const Login = ({setAlert,login,isAuthenticated}) => {
   const [formData,setFormData] = useState({ 
       email:'',
       password:'',
   });


const { email,password} = formData;

const onChange = e =>
setFormData({...formData,[e.target.name]:e.target.value});

const onSubmit = async e => {
    e.preventDefault();
      login({  email, password });
  };

if(isAuthenticated){
    return <Redirect to = '/'/>;
}
  return (
      <Fragment>
             <h1>Log In</h1>
       
      <form onSubmit={e => onSubmit(e)}>
        
        <div  >
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          
        </div>
        <div   >
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
       
        <input type='submit'    value='Login' />
      </form>
      <p   >
         Don't have account? <Link to='/register'>Sign Up</Link>
      </p>
      </Fragment>
  );
  };
  Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(
    mapStateToProps,
    { setAlert, login }
  )(Login);

 
