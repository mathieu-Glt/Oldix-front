import { NavLink } from 'react-router-dom';
import React, {useState } from 'react';

import Logo from 'src/assets/images/Logo.png';
import Profil from 'src/assets/images/profil_picture.png';
import LoginForm from 'src/components/LoginForm';

import './header.scss';

const Header = ({ menuHeader }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

 const handleIsOpen = () => {
   setIsOpen(!isOpen);
   ;
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
      <div>
        {/* <button className="test__connexion" onClick={handleIsLogin}>Vue de quelqu'un {isLogin ? "Déconnecté" : "Connecté"}</button> */}
        <button className="login__button" onClick={showOpenLoginForm}> {isLogin ? "Logout" : "Log in / Sign up"}</button>
      </div>
      <img src={Profil} alt="profil" className={isLogin ? "profil__connect" : "profil__disconnect"} />
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
  {openLoginForm && <LoginForm closeLoginForm={closeLoginForm} setOpenLoginForm={setOpenLoginForm}/>} 
  </div>
  )
  };

export default Header;
