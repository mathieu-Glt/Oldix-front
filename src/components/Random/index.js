import './random.scss';
import { Navigation } from 'swiper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

const Random = (openModal, setOpenModal, setDescriptionMovie, setLoading ) => {
  const [resultsMoviesRandom, setResultsMoviesRandom] = useState([]);

  const getMoviesRandom= () => {
    
    axios.get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/movies/randoms`)
    .then((response) => {
      setResultsMoviesRandom(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
    })
  }
  
  useEffect(() => {
    getMoviesRandom();
  }, []);

   // *******************  AFFICHAGE DU DOM ******************* //
  return (
  <div className="random__swiper__container">
  <Swiper
    modules={[Navigation]}
    className="random random__container"
    spaceBetween={30}
    slidesPerView={1}
    navigation
    >
    { resultsMoviesRandom.map((movie, index) => 
    <SwiperSlide 
      className="random__movie"
      key={movie.slug + index}
      > 
      <h3 className="random__title">{movie.name}</h3>
      <div className="random__content">
        <div className="random__content__left"> 
          <p><span className="indicator">Synopsis :</span> {movie.synopsis}</p>
          <p><span className="indicator">Year :</span> {movie.releasedDate}</p>
          <p><span className="indicator">Director :</span> {movie.realisator}</p>
          <p><span className="indicator">Category :</span> {movie.categories.name}</p>
          <p><span className="indicator">Actors :</span> {movie.actors}</p>
        </div>
        <div className="random__content__right">
          <iframe className="videoYT"
          src={movie.link} title={movie.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen ></iframe>
        </div>
        
      </div>
    </SwiperSlide>
    )}
    </Swiper>
    
    
  </div>
  )  
}; 

export default Random;


