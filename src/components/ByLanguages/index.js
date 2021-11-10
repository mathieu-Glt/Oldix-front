import { NavLink } from 'react-router-dom';

//import Modal from '../Modale/LogiqueModale';
import './byLanguages.scss';

const ByLanguages = ({ resultsLanguages }) => (

  <div className="container__bylanguages">

    <nav className="languages__submenu">
      {resultsLanguages.map((language) => (
        <NavLink
          className="submenu submenu__item"
          to={`/by_languages/${language.slug}`}
          key={language.name}
          activeClassName="submenu submenu__item__selected"
          exact
        >
          {language.name}
        </NavLink>
      ))}
    </nav>
    <div className="div__background">

    </div>
  </div> )
   

export default ByLanguages;
