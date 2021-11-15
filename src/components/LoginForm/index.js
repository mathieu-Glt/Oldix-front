import React from "react";
import './loginForm.scss';
import { useState, useEffect } from 'react';

const LoginForm = ({ setOpenLoginForm, closeLoginForm, register, isAuth, setIsAuth, login, email, setEmail, password, setPassword, usernameReg, setUsernameReg,emailReg, setEmailReg, passwordReg, setPasswordReg, confirmPasswordReg, setConfirmPasswordReg }) => {
  // ********************** Variable d'états ********************** 
  // Gestion de l'ouverture des forms
  const [registerForm, setRegisterForm] = useState(false);
  const [LoginForm, setLoginForm] = useState(true);

  const handleRegisterForm = () => {
    setRegisterForm(true);
    setLoginForm(false);
  }

  const handleLoginForm = () => {
    setRegisterForm(false);
    setLoginForm(true);
  }

  return (
  <div className="background">
    <button type="button" className="closebtn" onClick={closeLoginForm}>
                <span>&times;</span>
      </button>
    <div className="background__modal">
      <h1 className="title__login__form">What do you need ?</h1>
      <div className="button__swap">
        <button className="login__button__form" onClick={handleLoginForm}>Log in</button>
        <button className="login__button__form" onClick={handleRegisterForm}>Register</button>
      </div>
      <div className={LoginForm ? "container__login" : "container__login__close"}>
        <div className="row">
          <h4>Please login</h4>
        </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input 
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
                // console.log(`L'email est : ${e.target.value}`);
              }} 
              required 
              />
            <label><span id="email">Email</span></label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input 
              type="password"
              onChange={(e) => {
              setPassword(e.target.value);
              // console.log(`Le mdp est : ${e.target.value}`);
              }} 
              required 
              />
            <label><span id="passwordLogin">Password</span></label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <div className="form-message-login"></div>
            </div>
          </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn" onClick={login}>Log in</div>
        </div>
      </div>
    </div>
  
    <div className={registerForm ? "container__signup" : "container__signup__close"}>
      <div className="row">
        <h4>Welcome in Oldix ! You can create your account here</h4>
 </div>
 <div className="row input-container">
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input 
        type="text" 
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }} 
        required
       />
       <label>Username</label> 
     </div>
   </div>
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input 
        type="text"
        onChange={(e) => {
        setEmailReg(e.target.value);
        }}  
        required 
       />
       <label>Email</label> 
     </div>
   </div>
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input 
        type="password"
        onChange={(e) => {
        setPasswordReg(e.target.value);
        }} 
        required 
       />
       <label><span id="password">Password</span></label>
     </div>
   </div>
   <div className="col-xs-12">
     <div className="styled-input wide">
       <input 
        type="password"
        onChange={(e) => {
        setConfirmPasswordReg(e.target.value);
        console.log(`Le mdp est : ${e.target.value}`);
        }}  
        required
       />
       <label><span id="confirmPassword">Confirm password </span></label>
     </div>
   </div>
   <div className="col-xs-12">
     <div className="styled-input wide">
      <div className="form-message-register"></div>
      </div>
    </div>
   <div className="col-xs-12">
     <div className="btn-lrg submit-btn" onClick={register}>Register</div>
   </div>
 </div>
</div>
</div>
</div>
  )};

export default LoginForm;
