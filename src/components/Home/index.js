import Carrousel from '../Carrousel';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y,} from 'swiper';
import { useState, useEffect } from 'react';
import './home.scss';
import axios from 'axios';

const Home = ({ isFavorite, isFavoriteMovie, resultsCategories, loading, setDescriptionMovie, openModal, setOpenModal, setLoading, closeModal, isAuth, setIsAuth }) => {


  const [resultsMoviesByCategory, setResultsMoviesByCategory] = useState([]);
    // *******************  AFFICHAGE DE LA MODALE ******************* //
  


    const favoriteModal = movieSlug => {
      isFavoriteMovie(movieSlug);
      showModal(movieSlug);
    }

  const showModal = movieSlug => {
    setOpenModal(true);
    setLoading(true);
    
    axios
    .get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/movies/${movieSlug}`)
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

  const getMoviesByCategory = () => {
    
  axios.get('http://ec2-54-205-49-193.compute-1.amazonaws.com/api/list', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem("userDetails")
      }
    })
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
    getMoviesByCategory();
  }, []);

  return (    
    <div>
      {localStorage.getItem("isLoged") && 
      <div>
      <h1 className="categoriesTitle">My favorites Movies</h1>
      <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    className="swiper"
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
    </div>}
        { resultsCategories.map(categorie =>   
      <React.Fragment key={categorie.slug}>
        <h1 className="categoriesTitle" >{categorie.name}</h1>
       <Carrousel  favoriteModal={favoriteModal} isFavorite={isFavorite} isAuth={isAuth} setIsAuth={setIsAuth} categories={categorie.slug} openModal={openModal} setDescriptionMovie={setDescriptionMovie} setOpenModal={setOpenModal} setLoading={setLoading}/>
      </React.Fragment>
      )}
    </div>
)};

export default Home;
