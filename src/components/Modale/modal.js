import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import './modal.scss';


const Modal = ({ isFavorite, showModal, children, closeModal, loading, descriptionMovie }) => {
  
  
  const addFavoriteMovies = () => {
    axios.post("http://ec2-54-205-49-193.compute-1.amazonaws.com/api/list/add", {
      movie: descriptionMovie[0].slug
    },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("userDetails")
      },
      })
      .then((response) => {
        console.log("has been added to favorites")
          })
      .catch((error) => {
        console.log(error);
          })
          .finally(() => {
          })
  }
  
  const deleteFavorite = movieSlug => {
    axios.delete(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/list/delete/${movieSlug}`, {
     headers: {
       Authorization: 'Bearer ' + localStorage.getItem("userDetails")
       }
   })
   .then((response) => {
    window.location.reload(true);
   }
   )
 }
  const resultInModal = !loading ? (
    <React.Fragment>
      <button type="button" className="closebtn" onClick={closeModal}>
                <span>&times;</span>
      </button>
      <div className="modal__content">
        <div className="modal__content__left"> 
      <button className={!isFavorite ? "add__button" : "add__button__close"}
        type="button" onClick={addFavoriteMovies}>
          &#x2661;
      </button>
      <button className={isFavorite ? "add__button" : "add__button__close"}
        type="button" onClick={ () => deleteFavorite(descriptionMovie[0].slug)} >
          &#x2665;
      </button>
          <h3>{descriptionMovie[0].name}</h3>
          <p><span className="indicator">Synopsis :</span> {descriptionMovie[0].synopsis}</p>
          <p><span className="indicator">Year :</span> {descriptionMovie[0].releasedDate}</p>
          <p><span className="indicator">Director :</span> {descriptionMovie[0].realisator}</p>
          <p><span className="indicator">Categories :</span> {descriptionMovie[0].categories[0].name}</p>
          <p><span className="indicator">Actors :</span> {descriptionMovie[0].actors}</p>
        </div>
        <div className="modal__content__right">
          <iframe className="videoYT"
          src={descriptionMovie[0].link} title={descriptionMovie[0].link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen ></iframe>
        </div>
      </div>
    </React.Fragment>
)
: null;

  return (
    showModal && (
      <div className="modal">
        <div className="modal__background" onClick = { closeModal }>
        </div>       
        { children }
        { resultInModal }  
      </div>
    )
  )
}

export default Modal;
