import { NavLink } from 'react-router-dom';

import './thematics.scss';

const Thematics = ({ resultsThematics }) => (

  <div className="container__thematics">
    <nav className="categories__submenu">
      {resultsThematics.map((thematic) => ( 
        <NavLink
          className="submenu submenu__item"
          to={`/thematics/${thematic.slug}`}
          key={thematic.slug}
          activeClassName="submenu submenu__item__selected"
          exact
        >
          {thematic.name}
        </NavLink>
      ))}
    </nav>
    <div className="div__background">

   </div>
  </div> )
    


export default Thematics;
