import Carrousel from '../Carrousel';
import React from 'react';
import './home.scss';

const Home = ({ resultsCategories, loading, setDescriptionMovie, openModal, setOpenModal, setLoading, closeModal, }) => (
    <div>
        { resultsCategories.map(categorie =>   
      <React.Fragment key={categorie.slug}>
        <h1 className="categoriesTitle" >{categorie.name}</h1>
       <Carrousel  categories={categorie.slug} openModal={openModal} setDescriptionMovie={setDescriptionMovie} setOpenModal={setOpenModal} setLoading={setLoading}/>
      </React.Fragment>
      )}
    </div>
);

export default Home;
