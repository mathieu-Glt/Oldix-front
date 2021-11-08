import { NavLink } from 'react-router-dom';
import {useState } from 'react';

import Logo from 'src/assets/images/Logo.png';
import Profil from 'src/assets/images/profil_picture.png';

import './header.scss';

const Header = ({ menuHeader }) => {

  const [showLinks, setShowLinks] = useState(false)
  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

 

  return (
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
      <img src={Profil} alt="profil" className="profil" />
      {/* Barre de recherche => https://codepen.io/a7m3d000/pen/GRvKzEK */}
      <div className="container">
        <div className="search-bar">
          <div className="search-bar__search-icon"><i className="fas fa-search" /></div>
          <div className="search-bar__search-input">
            <input type="text" placeholder="Que cherchez-vous ?" />
          </div>
          <div className="search-bar__close-icon"><i className="far fa-times-circle" /></div>
        </div>
      </div>
    </div>
  </header>)
};

export default Header;
