import './carrousel.scss';
import { Navigation, Scrollbar, A11y,} from 'swiper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';



import 'swiper/css/pagination';

const Carroussel = ({ favoriteModal, categories, openModal, setOpenModal, setDescriptionMovie, setLoading, isAuth, isFavorite }) => {


  // *******************  AFFICHAGE DES FILMS ******************* //
  const [resultsMoviesByCategory, setResultsMoviesByCategory] = useState([]);

  const getMoviesByCategory = () => {
    
    axios.get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/categories/${categories}`)
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
    slidesPerView={9}
    navigation
    scrollbar={{ draggable: true }}
  >
    { resultsMoviesByCategory.map((movie, index) =>
    <SwiperSlide 
      className="swiperSlide"
      key={movie.slug + index}
      > 
        <img className="carouselbox__img" src={movie.pictureUrl} alt= {movie.name} onClick={ () =>  favoriteModal(movie.slug) }></img>
    </SwiperSlide>
    )}
    </Swiper>
    
    
  </div>
  )  
}; 
export default Carroussel;
