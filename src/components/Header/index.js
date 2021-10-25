import Logo from 'src/assets/images/Logo.png';
import Profil from 'src/assets/images/profil_picture.png';

import './header.scss';

const Header = () => (

  <header className="header">
    <nav className="header__left">
      <img className="logo" src={Logo} alt="logo" />
      <ul className="menu">
        <li className="menu__item">Categories</li>
        <li className="menu__item">By languages</li>
        <li className="menu__item">Thematics</li>
        <li className="menu__item">Have you seen this ?</li>
      </ul>
    </nav>

    <div className="header__right">
      <img src={Profil} alt="profil" className="profil" />
      {/* Barre de recherche => https://codepen.io/a7m3d000/pen/GRvKzEK */}
      <div className="search-bar__search-icon"><i className="fas fa-search" /></div>
      <div className="search-bar__search-input">
        <input type="text" placeholder="Que cherchez-vous ?" />
      </div>
      <div className="search-bar__close-icon"><i className="far fa-times-circle" /></div>
    </div>
  </header>
);

export default Header;
