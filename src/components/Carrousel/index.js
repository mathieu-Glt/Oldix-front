import './carrousel.scss';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import Modal from 'src/components/Modale/modal';

import 'swiper/css/pagination';

const Carroussel = ({ categories }) => {

  // *******************  VARIABLES D'ETATS ******************* //
  const [openModal, setOpenModal] = useState(false);
  const [descriptionMovie, setDescriptionMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  // *******************  AFFICHAGE DE LA MODALE ******************* //
  const showModal = movieSlug => {
    setOpenModal(true);
    setLoading(true);

    axios
    .get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/movies/${movieSlug}`)
    .then(response =>{
      console.log([response.data]);
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

  {console.log(categories);}
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
  const resultInModal = !loading ? (
      <React.Fragment>
        <button type="button" className="closebtn" onClick={closeModal}>
                  <span>&times;</span>
        </button>
        <div className="modal__content">
          <div className="modal__content__left"> 
            <h3>{descriptionMovie[0].name}</h3>
            <p><span className="indicator">Synopsis :</span> {descriptionMovie[0].synopsis}</p>
            <p><span className="indicator">Year :</span> {descriptionMovie[0].releasedDate}</p>
            <p><span className="indicator">Director :</span> {descriptionMovie[0].realisator}</p>
            <p><span className="indicator">Categories :</span> {descriptionMovie[0].categories[0].name}</p>
            <p><span className="indicator">Actors :</span> {descriptionMovie[0].actors}</p>
          </div>
          <div className="modal__content__right">
            <iframe width="768" height="432"
            src="https://www.youtube.com/embed/c0wr-PFTN2k" title={descriptionMovie[0].link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen ></iframe>
          </div>
        </div>
      </React.Fragment>
  )
  : null;

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
    { resultsMoviesByCategory.map(movie =>
    <SwiperSlide 
      className="swiperSlide"
      > 
        <img className="carouselbox__img" src={movie.pictureUrl} alt= {movie.name} onClick={ () =>  showModal(movie.slug) }></img>
    </SwiperSlide>
    )}
    </Swiper>
    <Modal showModal={openModal}  closeModal={closeModal}>
        { resultInModal }    
    </Modal>
    
  </div>
  )  
}; 
export default Carroussel;
