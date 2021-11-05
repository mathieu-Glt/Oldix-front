
const MoviesList = ({ movies }) => (
  
  <div className="category__movies">
    <section className="category__movies__container">
      {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <img className="movie__img" src={movie.pictureUrl} alt="Describe Movie" />
          </div>
      ))}
    </section>
  </div>
);

export default MoviesList;
