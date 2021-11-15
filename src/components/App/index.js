// == Import
import { Route, Switch, NavLink } from 'react-router-dom';
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
import FavoriteList from 'src/components/FavoriteList';
import SearchResults from 'src/components/SearchResults';
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

  const [isAuth, setIsAuth] = useState();

  // Variable qui contient les informations des films en fonction de leur catégorie et/ou la recherche
  const [movies, setMovies] = useState([]);
  // Variable qui définit l'état de chargement de la requête search et des requêtes dans les différentes catégories
  const [isLoading, setIsLoading] = useState(true);
  // Variable qui définit la recherche de l'utilisateur
  const [search, setSearch] = useState('');
  const [isFavorite, setIsFavorite] = useState(false)

  // Requête à l'API de recherche
  const loadResults = () => {
    console.log("Je me lance");
    axios.get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/movies/research?q=${search}`)
      .then((response) => {
        setMovies(response.data);
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        {<NavLink
        to="/search"
        key="Search" 
        />
      }
      })
  };
  // useEffect(() => {

  // }, [movies]);

  // Fonction pour ouvrir/fermer la modale
  const closeModal = () => {
    setOpenModal(false);
    setLoading(true);
  }
  // Requête à l'API pour savoir si un film est Favoris ou non
  const isFavoriteMovie = movieSlug => {

    axios.get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/list/check/${movieSlug}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("userDetails")
        }
  })
      .then((response) => {
        console.log(isFavorite);
        response.data.message == "true" ? setIsFavorite(true) : setIsFavorite(false);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log("t'es nul")
      })
      .finally(() => {
      });
    };
    const favoriteIcon = localStorage.getItem("isFavorite");
    
  // Requête API pour les noms des catégories
  const getMoviesCategories = () => {
    axios.get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/categories`)
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
    axios.get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/languages`)
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
    axios.get(`http://ec2-54-205-49-193.compute-1.amazonaws.com/api/thematics`)
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

      <Header isAuth={isAuth} setIsAuth={setIsAuth} menuHeader={menuData} grayFilter={grayFilter} setGrayFilter={setGrayFilter} search={search} setSearch={setSearch} loadResults={loadResults} />
      <div id="mainContainer">
      <Route path="/" exact >
        <Home isFavoriteMovie={isFavoriteMovie} isFavorite={isFavorite} isAuth={isAuth} setIsAuth={setIsAuth} resultsCategories={resultsCategories} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/categories" exact >
        <Categories movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} resultsCategories={resultsCategories} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal} />
      </Route>
      <Route path="/categories/:slug">
        <SubCategory movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} resultsCategories={resultsCategories} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal} />
      </Route>
      <Route path="/by_languages" exact>
        <ByLanguages movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} resultsLanguages={resultsLanguages} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/by_languages/:slug">
        <SubByLanguages movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} resultsLanguages={resultsLanguages} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/thematics" exact>
        <Thematics movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} resultsThematics={resultsThematics} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/thematics/:slug">
        <SubThematics movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} resultsThematics={resultsThematics} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
      </Route>
      <Route path="/have_you_seen_this" exact >
        <Random />
      </Route>
      <Route path="/favorite_list" exact >
        <FavoriteList setOpenModal={setOpenModal} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} loading={loading} />
      </Route>
      <Route path="/search" >
        <SearchResults movies={movies} setOpenModal={setOpenModal} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} loading={loading} />
      </Route>
      {/* movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} POUR LE COMPO SEARCHRESULTS*/} 
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
      </div>
      <Modal isFavoriteMovie={isFavoriteMovie} isFavorite={isFavorite} descriptionMovie={descriptionMovie} loading={loading} showModal={openModal} closeModal={closeModal} />
      <Footer menuFooter={footerData}/>
    </div>
  );
};
// == Export
export default App;
