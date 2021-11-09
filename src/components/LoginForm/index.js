import React from "react";
import './loginForm.scss';
import { useState } from 'react';

const LoginForm = ({ setOpenLoginForm, closeLoginForm }) => {
  
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  const handleRegister = () => {
    setRegister(true);
    setLogin(false);
  }

  const handleLogin = () => {
    setRegister(false);
    setLogin(true);
  }

  return (
  <div className="background">
    <button type="button" className="closebtn" onClick={closeLoginForm}>
                <span>&times;</span>
      </button>
    <div className="background__modal">
      <h1 className="title__login__form">What do you need ?</h1>
      <div className="button__swap">
        <button className="login__button__form" onClick={handleLogin}>Log in</button>
        <button className="login__button__form" onClick={handleRegister}>Register</button>
      </div>
      <div className={login ? "container__login" : "container__login__close"}>
        <div className="row">
          <h4>Please login</h4>
        </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" required />
            <label>Email</label> 
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" required />
            <label>Password</label> 
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn">Log in</div>
        </div>
      </div>
    </div>
  
    <div className={register ? "container__signup" : "container__signup__close"}>
      <div className="row">
        <h4>Welcome in Oldix ! You can create your account here</h4>
 </div>
 <div className="row input-container">
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input type="text" required />
       <label>Username</label> 
     </div>
   </div>
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input type="text" required />
       <label>Email</label> 
     </div>
   </div>
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input type="text" required />
       <label>Password</label>
     </div>
   </div>
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input type="text" required></input>
       <label>Confirm password</label>
     </div>
   </div>
   <div className="col-xs-12">
     <div className="btn-lrg submit-btn">Register</div>
   </div>
 </div>
</div>
</div>
</div>
  )};

export default LoginForm;
