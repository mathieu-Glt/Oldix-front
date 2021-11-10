// == Import
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Thematics from 'src/components/Thematics';
import Categories from 'src/components/Categories';
import ByLanguages from 'src/components/ByLanguages';
import SubCategory from 'src/components/SubCategory';
import SubByLanguages from 'src/components/SubByLanguages';
import SubThematics from 'src/components/SubThematics';
import Random from 'src/components/Random';
import ContactUs from 'src/components/ContactUs';
import LegalMentions from 'src/components/LegalMentions';
import About from 'src/components/About';
import Modal from 'src/components/Modale/modal';
import Footer from 'src/components/Footer';

// Import du tableau des Routes
import menuData from 'src/data/menu';
import footerData from 'src/data/footer';
// import submenuCategories from 'src/data/categories';
// import submenuThematics from 'src/data/thematics';
// import submenuByLanguages from 'src/data/bylanguages';
// import movies from 'src/data/movies';

import './styles.css';

// == Composant
const App = () => { 
  // ********************** Variable d'états ********************** 
  // Variable qui contient les noms des catégories
  const [resultsCategories, setResultsCategories] = useState([]);
  // Variable qui contient les noms des différentes langues
  const [resultsLanguages, setResultsLanguages] = useState([]);
  // Variable qui contient les noms des thématiques
  const [resultsThematics, setResultsThematics] = useState([]);
  
  // Variable qui définit l'affichage de la modale
  const [openModal, setOpenModal] = useState(false);
  // Variable qui définit l'état de chargement de la requête API
  const [loading, setLoading] = useState(true);
  // Variable contenant les informations d'un film
  const [descriptionMovie, setDescriptionMovie] = useState([]);
  
  const [grayFilter, setGrayFilter] = useState(false);



  // Fonction pour ouvrir/fermer la modale
  const closeModal = () => {
    setOpenModal(false);
    setLoading(true);
  }

  // Requête API pour les noms des catégories
  const getMoviesCategories = () => {
    axios.get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/categories`)
    .then((response) => {
      // console.log('repositories :', response.data.items);
      // console.log(`nb : {response.data.total_count}`);
      setResultsCategories(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
    })
  }
  useEffect(() => {
    document.title = `Accueil`;
    getMoviesCategories();
  }, []);

  // Requête API pour les noms des différentes langues
  const getMoviesLanguages = () => {
    axios.get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/languages`)
    .then((response) => {
      // console.log('repositories :', response.data.items);
      // console.log(`nb : {response.data.total_count}`);
      setResultsLanguages(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
    })
  }
  useEffect(() => {
    getMoviesLanguages();
  }, []);

  // Requête API pour les noms des thématiques
  const getThematics = () => {
    axios.get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/thematics`)
    .then((response) => {
      // console.log('repositories :', response.data.items);
      // console.log(`nb : {response.data.total_count}`);
      setResultsThematics(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
    })
  }
  useEffect(() => {
    getThematics();
  }, []);

  return (
    <div className={!grayFilter ? "app" : "app__gray"}>
      <Header menuHeader={menuData} grayFilter={grayFilter} setGrayFilter={setGrayFilter}/>
      <Route path="/" exact >
        <Home resultsCategories={resultsCategories} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/categories" exact >
        <Categories resultsCategories={resultsCategories} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal} />
      </Route>
      <Route path="/categories/:slug">
        <SubCategory resultsCategories={resultsCategories} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal} />
      </Route>
      <Route path="/by_languages" exact>
        <ByLanguages resultsLanguages={resultsLanguages} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/by_languages/:slug">
        <SubByLanguages resultsLanguages={resultsLanguages} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/thematics" exact>
        <Thematics resultsThematics={resultsThematics} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/thematics/:slug">
        <SubThematics resultsThematics={resultsThematics} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/have_you_seen_this" exact >
        <Random />
      </Route>
       {/* ********************** Footer ********************** */}
      <Route path="/contact_us" exact>
        <ContactUs />
      </Route>
      <Route path="/legal_mentions" exact>
        <LegalMentions />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Modal descriptionMovie={descriptionMovie} loading={loading} showModal={openModal} closeModal={closeModal} />
      <Footer menuFooter={footerData}/>
    </div>
  );
};
// == Export
export default App;
