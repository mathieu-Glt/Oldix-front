import React from 'react';
import './modal.scss';


const Modal = ({ showModal, children, closeModal, loading, descriptionMovie }) => {
  
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
          <iframe className="videoYT"
          src={descriptionMovie[0].link} title={descriptionMovie[0].link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen ></iframe>
        </div>
      </div>
    </React.Fragment>
)
: null;

  return (
    showModal && (
      <div className="modal" onClick = { closeModal }>       
        { children }
        { resultInModal }  
      </div>
    )
  )
}

export default Modal;
