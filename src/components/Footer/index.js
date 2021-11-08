import { NavLink } from 'react-router-dom';
import './footer.scss';

const Footer = ({ menuFooter}) => (
  <div className="container__footer">
    <div className="footer">
      <ul className="menu__footer">
      {menuFooter.map((menu) => (
        <NavLink
          className="menu__footer__item"
          to={menu.route}
          key={menu.label}
          activeClassName="menu__footer__item__selected"
          exact
        >
          {menu.label}
        </NavLink>
      ))}
      </ul>
    </div>
  </div>
);

export default Footer;
