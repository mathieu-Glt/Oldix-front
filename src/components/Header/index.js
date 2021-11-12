import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Logo from 'src/assets/images/Logo.png';
import Profil from 'src/assets/images/profil_picture.png';
import LoginForm from 'src/components/LoginForm';

import './header.scss';

const Header = ({ menuHeader, grayFilter, setGrayFilter, isAuth, setIsAuth }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);

  // Variables qui contiennent les valeurs des inputs de login form
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  // Variables qui contiennent les valeurs des inputs de register form
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");

  
  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  
  const handleIsAuth = () => {
    setIsAuth(false);
    sessionStorage.clear();
  }
  
  const handleIsOpen = () => {
   setIsOpen(!isOpen);
   ;
  }
  
  const handleGrayFilter = () => {
    setGrayFilter(!grayFilter)
  }  
  
  const handleIsLogin = () => {
    setIsLogin(!isLogin);
    console.log(isLogin);
  }
  
  const showOpenLoginForm = () => {
    setOpenLoginForm(true);
  }
  const closeLoginForm = () => {
    setOpenLoginForm(false);
    console.log(setOpenLoginForm)
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
        sessionStorage.setItem('userDetails', response.data.token);
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
      sessionStorage.setItem('userDetails', response.data.token);
      //console.log(response)
      //console.log(localStorage);
      setIsAuth(true);
      sessionStorage.setItem('isLoged', true)
      closeLoginForm();
      window.location.reload(true);
    })
    .catch((error) => {
      //console.log(error);
    })
  }
  useEffect(() => {
    login();
  }, []);

  return (
  <div className="loginForm">
  <header className="header">
    <nav className={`header__left ${showLinks ? "show-nav" : "hide-nav"} `}>
      <a href="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      {menuHeader.map((menu) => (
        <NavLink
        className="menu menu__item"
        to={menu.route}
        key={menu.label}
        activeClassName="menu menu__item__selected"
          onClick={handleShowLinks}
          exact
          >
          {menu.label}
        </NavLink>
      ))}
    </nav>
      <button className="menu__burger" onClick={handleShowLinks}>
       <span className="burger__bar"></span>
      </button>

    <div className="header__right">
      <div className="button__container">
        {/* <button className="test__connexion" onClick={handleIsLogin}>Vue de quelqu'un {isLogin ? "Déconnecté" : "Connecté"}</button> */}
        <button className="login__button" onClick={handleGrayFilter}>{!grayFilter ? "Black and white mode" : "Color mode"}</button>
        <button className={!sessionStorage.getItem("isLoged") ? "login__button" : "login__button__close"} onClick={showOpenLoginForm}>Log in / Sign up</button>
        <button className={sessionStorage.getItem("isLoged") ? "login__button" : "login__button__close"} onClick={handleIsAuth}>Logout</button> 
      </div>
      <img src={Profil} alt="profil" className={isAuth ? "profil__connect" : "profil__disconnect"} />
      {/* Barre de recherche => https://codepen.io/a7m3d000/pen/GRvKzEK */}
      <div  className={isOpen ? "container__open" : "container__close"}>
        <div className="search-bar" >
          <div className="search-bar__search-icon"><img className={isOpen ? "loop__icon" : "loop__icon__close"} src="https://cdn-icons-png.flaticon.com/128/108/108138.png" onClick={ () =>  handleIsOpen() }></img> </div>
          <div className={isOpen ? "search-bar__search-input" : "search-bar__search-input__close"}>
            <input className={isOpen ? "search-bar__search-input" : "search-bar__search-input__close"} type="text" placeholder="Que cherchez-vous ?" />
          </div>
        </div>
      </div>
      </div>
  </header>
  {openLoginForm && <LoginForm login={login} register={register} closeLoginForm={closeLoginForm} setOpenLoginForm={setOpenLoginForm} isAuth={isAuth} setIsAuth={setIsAuth} email={email} setEmail={setEmail} password={password} setPassword={setPassword} usernameReg={usernameReg} setUsernameReg={setUsernameReg} emailReg={emailReg} setEmailReg={setEmailReg} passwordReg={passwordReg} setPasswordReg={setPasswordReg} confirmPasswordReg={confirmPasswordReg} setConfirmPasswordReg={setConfirmPasswordReg} />} 
  </div>
  )
};

export default Header;
