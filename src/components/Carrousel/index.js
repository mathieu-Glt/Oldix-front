import './carrousel.scss';
import { Navigation, Scrollbar, A11y } from 'swiper';
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
      console.log('carousel show modal axios', [response.data]);
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
      // console.log('repositories :', response.data.items);
      // console.log(`nb : {response.data.total_count}`);
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

  /*
 //Ici, elle sera exécutée à chaque affichage
useEffect(() => {
    monTraitement();
  });
//Elle sera appelée lors du premier affichage et à chaque fois que l'élément "maVariable" sera modifié
useEffect(() => {
    monTraitement();
  }, [maVariable]);
//Dans ce cas, la fonction ne sera appelée que lors du premier affichage du composant
useEffect(() => {
    monTraitement();
  }, []);
  */

  /*useEffect(() => {
    setLoading(true);
  }, [loading]);*/

   // *******************  CONTENU DE LA MODALE ******************* //


   // *******************  AFFICHAGE DU DOM ******************* //
  return (
  <div className="swiper">
  <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    className="swiper__container"
    spaceBetween={30}
    slidesPerView={9.5}
    navigation
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
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
