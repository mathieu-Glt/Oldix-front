import { NavLink } from 'react-router-dom';
import './thematics.scss';

const Thematics = ({ menuThematics }) => (
  <div className="container__thematics">
    <nav className="categories__submenu">
      {menuThematics.map((thematic) => (
        <NavLink
          className="submenu submenu__item"
          to={thematic.route}
          key={thematic.label}
          activeClassName="submenu submenu__item__selected"
          exact
        >
          {thematic.label}
        </NavLink>
      ))}
    </nav>

    <h1>{menuThematics.label}</h1>

    <div className="wrapper__thematics">
    {/* Début 1er section */}
      <section className="section__thematics">
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
      </section>
      {/* Début 2ème section */}
      <section className="section__thematics">
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
      </section>
      {/* Début 3ème section */}
      <section className="section__thematics">
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
      </section>
    </div>
  </div>
);

export default Thematics;
