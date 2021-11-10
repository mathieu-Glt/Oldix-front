import React from "react";
import './loginForm.scss';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setOpenLoginForm, closeLoginForm, isAuth, setIsAuth }) => {
  // ********************** Variable d'états ********************** 
  // Gestion de l'ouverture des forms
  const [registerForm, setRegisterForm] = useState(false);
  const [LoginForm, setLoginForm] = useState(true);

  // Variables qui contiennent les valeurs des inputs de login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Variables qui contiennent les valeurs des inputs de register form
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");

  const handleRegisterForm = () => {
    setRegisterForm(true);
    setLoginForm(false);
  }

  const handleLoginForm = () => {
    setRegisterForm(false);
    setLoginForm(true);
  }

  const register = () => {
    if (passwordReg !== confirmPasswordReg) {
      alert("Passwords don't match");
    } else {
      axios.post("http://ec2-54-165-199-42.compute-1.amazonaws.com/api/register",{
        pseudo: usernameReg,
        email: emailReg,
        password: passwordReg
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('userDetails', response.data.token);
        setIsAuth(true);
        closeLoginForm();
      })
      .catch((error) => {
        console.log(error);
      })
    }
  };

  const login = () => {
    axios.post("http://ec2-54-165-199-42.compute-1.amazonaws.com/api/login_check",{
      username: email,
      password: password,
    })
    .then((response) => {
      localStorage.setItem('userDetails', response.data.token);
      //console.log(response)
      //console.log(localStorage);
      setIsAuth(true);
      closeLoginForm();
    })
    .catch((error) => {
      console.log(error);
    })
  };

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
            <label>Email</label> 
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
            <label>Password</label> 
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
          console.log(`Le Username est : ${e.target.value}`);
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
        console.log(`L'email est : ${e.target.value}`);
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
        console.log(`Le mdp est : ${e.target.value}`);
        }} 
        required 
       />
       <label>Password</label>
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
       <label>Confirm password</label>
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
