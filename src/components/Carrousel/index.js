import './carrousel.scss';
import { Navigation, Scrollbar, A11y,} from 'swiper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';



import 'swiper/css/pagination';

const Carroussel = ({ categories, openModal, setOpenModal, setDescriptionMovie, setLoading }) => {

  // *******************  VARIABLES D'ETATS ******************* //

  // *******************  AFFICHAGE DE LA MODALE ******************* //
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

  const closeModal = () => {
    setOpenModal(false);
    setLoading(true);
  }

  // *******************  AFFICHAGE DES FILMS ******************* //
  const [resultsMoviesByCategory, setResultsMoviesByCategory] = useState([]);

  const getMoviesByCategory = () => {
    
    axios.get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/categories/${categories}`)
    .then((response) => {
      setResultsMoviesByCategory(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
    })
    }
  
  useEffect(() => {
    document.title = `Accueil`;
    getMoviesByCategory();
  }, []);

   // *******************  AFFICHAGE DU DOM ******************* //
  return (
  <div className="swiper">
  <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    className="swiper__container"
    spaceBetween={30}
    slidesPerView={8.5}
    navigation
    scrollbar={{ draggable: true }}
  >
    { resultsMoviesByCategory.map((movie, index) =>
    <SwiperSlide 
      className="swiperSlide"
      key={movie.slug + index}
      > 
        <img className="carouselbox__img" src={movie.pictureUrl} alt= {movie.name} onClick={ () =>  showModal(movie.slug) }></img>
    </SwiperSlide>
    )}
    </Swiper>
    
    
  </div>
  )  
}; 
export default Carroussel;
