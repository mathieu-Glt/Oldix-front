import './carrousel.scss';

const Carroussel = () => (
  <div className="container__carrousel">
    <h1>Action</h1>
    <div className="wrapper">
      <section id="section1">
        <a href="#section3" className="arrow__btn">‹</a>
        <div className="item">
          <img className="first__item item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
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
        <a href="#section2" className="arrow__btn">›</a>
      </section>

      <section id="section2">
        <a href="#section1" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BY2U0NjJmYjMtZDUzZi00YzVkLTkwNWEtOGFkYTg3ZDQ0YjYwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMzY1ODRkN2MtNWM5My00ZDNiLTk0YzUtMzBkMGQ0NmUxODRkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section3" className="arrow__btn">›</a>
      </section>

      <section id="section3">
        <a href="#section2" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMzY1ODRkN2MtNWM5My00ZDNiLTk0YzUtMzBkMGQ0NmUxODRkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BY2U0NjJmYjMtZDUzZi00YzVkLTkwNWEtOGFkYTg3ZDQ0YjYwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section1" className="arrow__btn">›</a>
      </section>
    </div>

    {/* Début du 2ème carrousel */}
    <h1>Horror</h1>
    <div className="wrapper">
      <section id="section4">
        <a href="#section6" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BY2U0NjJmYjMtZDUzZi00YzVkLTkwNWEtOGFkYTg3ZDQ0YjYwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMzY1ODRkN2MtNWM5My00ZDNiLTk0YzUtMzBkMGQ0NmUxODRkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section5" className="arrow__btn">›</a>
      </section>

      <section id="section5">
        <a href="#section4" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section6" className="arrow__btn">›</a>
      </section>

      <section id="sectionn6">
        <a href="#section5" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BY2U0NjJmYjMtZDUzZi00YzVkLTkwNWEtOGFkYTg3ZDQ0YjYwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMzY1ODRkN2MtNWM5My00ZDNiLTk0YzUtMzBkMGQ0NmUxODRkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section4" className="arrow__btn">›</a>
      </section>
    </div>

    {/* Début du 3ème carrousel */}
    <h1>Western</h1>
    <div className="wrapper">
      <section id="section10">
        <a href="#section12" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMzY1ODRkN2MtNWM5My00ZDNiLTk0YzUtMzBkMGQ0NmUxODRkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BY2U0NjJmYjMtZDUzZi00YzVkLTkwNWEtOGFkYTg3ZDQ0YjYwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section11" className="arrow__btn">›</a>
      </section>
      <section id="section11">
        <a href="#section10" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BY2U0NjJmYjMtZDUzZi00YzVkLTkwNWEtOGFkYTg3ZDQ0YjYwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMzY1ODRkN2MtNWM5My00ZDNiLTk0YzUtMzBkMGQ0NmUxODRkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section12" className="arrow__btn">›</a>
      </section>
      <section id="section12">
        <a href="#section11" className="arrow__btn">‹</a>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMjExMzJhYTYtZDlhNC00NDIyLWIyMGUtMDBhOGE3MzAzMjA1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMzY1ODRkN2MtNWM5My00ZDNiLTk0YzUtMzBkMGQ0NmUxODRkXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYmE3Yzc1ZTktMDAwNC00OTg0LWI1ZmYtMzg2NDNiOWRlZjkwXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BYThiMzJiNzMtMzI4My00MmFmLThjODctNWE2MjMwZTM1NGFkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <div className="item">
          <img className="item__img" src="https://m.media-amazon.com/images/M/MV5BMDFiNmJhYTQtYWQ0MS00OTEwLWJkNjQtMDIzNWQ3NjExMTg4XkEyXkFqcGdeQXVyOTI2MjI5MQ@@._V1_SX300.jpg" alt="Describe Movie" />
        </div>
        <a href="#section10" className="arrow__btn">›</a>
      </section>
    </div>
  </div>

);
export default Carroussel;
