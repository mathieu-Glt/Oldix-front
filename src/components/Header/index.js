import { NavLink } from 'react-router-dom';

import Logo from 'src/assets/images/Logo.png';
import Profil from 'src/assets/images/profil_picture.png';

import './header.scss';

const Header = ( {menu} ) => (

  <header className="header">
    <nav className="header__left">
      <a href="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      {menu.map((menu) => (
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
  </header>
);

export default Header;
