import axios from 'axios'

const MoviesList = ({ movies, loading, setDescriptionMovie, openModal, setOpenModal, setLoading, closeModal }) => {

  const showModal = movieSlug => {
    setOpenModal(true);
    setLoading(true);

    axios
    .get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/movies/${movieSlug}`)
    .then(response =>{
      setDescriptionMovie([response.data]);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {

    });
  }

  return (
  <div className="category__movies">
    <section className="category__movies__container">
      {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <img className="movie__img" onClick={ () =>  showModal(movie.slug)} src={movie.pictureUrl} alt="Describe Movie" />
          </div>
      ))}
    </section>
  </div>
  )
};

export default MoviesList;
