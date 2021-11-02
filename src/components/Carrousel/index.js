import './carrousel.scss';
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Modale from '../Modale/modal'

import 'swiper/css/pagination';

const Carroussel = ({ results, revele, toggle }) => (
  <div className="swiper">
  <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    className="swiper__container"
    spaceBetween={30}
    slidesPerView={8.5}
    navigation
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    { results.map(movie =>
    <SwiperSlide 
      key={movie.slug}> 
        <img className="carouselbox__img" src={movie.pictureUrl} alt= {movie.name} onClick={toggle}></img>
    </SwiperSlide>
    )}
    </Swiper>
    <Modale 
      revele={revele}
      cache={toggle}
      results={results}
    />
  </div>   
); 
export default Carroussel;
