import { NavLink } from 'react-router-dom';

import Modal from './Modal';
import './byLanguages.scss';

const ByLanguages = ({ menuByLanguages, movies }) => (
  <div className="container__bylanguages">

    <nav className="categories__submenu">
      {menuByLanguages.map((language) => (
        <NavLink
          className="submenu submenu__item"
          to={language.route}
          key={language.label}
          activeClassName="submenu submenu__item__selected"
          exact
        >
          {language.label}
        </NavLink>
      ))}
    </nav>

    <h1>{menuByLanguages.label}</h1>

    <div className="wrapper__bylanguages">
    {/* Début 1er section */}
      <section className="section__bylanguages">
        <div className="item">
          <a href="#id01"> 
            <img className="item__img" src={movies[0].image}  alt="Describe Movie" />
          </a>
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
      <section className="section__bylanguages">
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
      <section className="section__bylanguages">
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
      {/* MODAL */}
      <Modal movies={movies} />
    </div>
  </div>
);

export default ByLanguages;
