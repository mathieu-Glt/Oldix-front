import Carrousel from '../Carrousel';
import React from 'react';
import Modal from 'src/components/Modale/modal';
import { useState, useEffect } from 'react';
import './home.scss';

const Home= ({ resultsCategories }) => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
    setLoading(true);
  }
  const [loading, setLoading] = useState(true);
  const [descriptionMovie, setDescriptionMovie] = useState([]);
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

  return (
    <div>
        { resultsCategories.map(categorie =>   
      <React.Fragment key={categorie.slug}>
        <h1 className="categoriesTitle" >{categorie.name}</h1>
        <Carrousel  categories={categorie.slug} openModal={openModal} setOpenModal={setOpenModal} setDescriptionMovie={setDescriptionMovie} setLoading={setLoading}/>
      </React.Fragment>
      )}
      {/* {console.log(categorie.slug)} */}
      <Modal showModal={openModal}  closeModal={closeModal}>
        { resultInModal }    
    </Modal>
    </div>
  )
};

export default Home;
