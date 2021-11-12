import { useState, useEffect } from 'react';
import axios from 'axios';

import './favoriteList.scss';

const FavoriteList = ({ setOpenModal, setLoading, setDescriptionMovie, openModal, loading }) => {

  // On défini le state initial
  const [movies, setMovies] = useState([]);

  const getFavoriteMovies = () => {
    
    axios.get('http://ec2-54-165-199-42.compute-1.amazonaws.com/api/list', {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem("userDetails")
        }
      })
      .then((response) => {
      setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      })
      
    } 
    useEffect(() => {
      getFavoriteMovies();
    }, []);

    // affichage de la modale
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
  <div className="container__categories"> 
    
    <h1>My favorite movies</h1>
      <div className="category__movies">
      <section className="category__movies__container">
        {movies.map((movie, index) => (
            <div className="movie" key={index}>
              <img className="movie__img" onClick={ () =>  showModal(movie.slug)} src={movie.pictureUrl} alt="Describe Movie" />
              <button type="button" className="button__delete">Delete</button>
            </div>
        ))}
      </section>
    </div>
  </div>
  );
};

export default FavoriteList;
