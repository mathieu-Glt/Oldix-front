import { NavLink } from 'react-router-dom';

import './categories.scss';

const Categories = ( {menuCategories} ) => (
  <div className="container__categories">
    <nav className="categories__submenu">
      {menuCategories.map((category) => (
        <NavLink
          className="submenu submenu__item"
          to={category.route}
          key={category.label}
          activeClassName="submenu submenu__item__selected"
          exact
        >
          {category.label}
        </NavLink>
      ))}
    </nav>

    <h1>{menuCategories.label}</h1>
    
    <div className="wrapper__categories">
      {/* Début 1er section */}
      <section className="section__categories">
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
      </section>
      {/* Début 2ème section */}
      <section className="section__categories">
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
      </section>
      {/* Début 3ème section */}
      <section className="section__categories">
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
      </section>
    </div>
  </div>
);

export default Categories;
