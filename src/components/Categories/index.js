import { NavLink } from 'react-router-dom';

import './categories.scss';

const Categories = ({ resultsCategories }) => (
  <div className="container__categories">
    <nav className="categories__submenu">
      {resultsCategories.map((category) => (
        <NavLink
          className="submenu submenu__item"
          to={`/categories/${category.slug}`}
          key={category.slug}
          activeClassName="submenu submenu__item__selected"
          exact
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
    <div className="div__background">

    </div>
  </div> )
       

export default Categories;
