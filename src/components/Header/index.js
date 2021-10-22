import Logo from 'src/assets/images/Logo.png';
import Profil from 'src/assets/images/profil_picture.png';
import Roux from 'src/assets/images/leroux.jpg';

import './header.scss';

const Header = () => (

  <header className="header">
    <nav>
      <img src={Logo} alt="logo" />
      <ul className="menu">
        <li>Categories</li>
        <li>By languages</li>
        <li>Thematics</li>
        <li>Have you seen this ?</li>
      </ul>
    </nav>

    <div>
      <img src={Profil} alt="profil" className="profil" />
    </div>
  </header>
);

export default Header;
