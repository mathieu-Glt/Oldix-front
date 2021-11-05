// == Import
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Thematics from 'src/components/Thematics';
import Categories from 'src/components/Categories';
import ByLanguages from 'src/components/ByLanguages';
import SubCategory from 'src/components/SubCategory';
import SubByLanguages from 'src/components/SubByLanguages';
import SubThematics from 'src/components/SubThematics';

// Import du tableau des Routes
import menuData from 'src/data/menu';
// import submenuCategories from 'src/data/categories';
import submenuThematics from 'src/data/thematics';
// import submenuByLanguages from 'src/data/bylanguages';
import movies from 'src/data/movies';

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
    <div className="app">
      <Header menu={menuData} />
      <Route path="/" exact >
        <Home resultsCategories={resultsCategories} />
      </Route>
      <Route path="/categories" exact >
        <Categories resultsCategories={resultsCategories} />
      </Route>
      <Route path="/categories/:slug">
        <SubCategory resultsCategories={resultsCategories} />
      </Route>
      <Route path="/by_languages" exact>
        <ByLanguages resultsLanguages={resultsLanguages} />
      </Route>
      <Route path="/by_languages/:slug">
        <SubByLanguages resultsLanguages={resultsLanguages} />
      </Route>
      <Route path="/thematics" exact>
        <Thematics resultsThematics={resultsThematics} />
      </Route>
      <Route path="/thematics/:slug">
        <SubThematics resultsThematics={resultsThematics} />
      </Route>
      {/* <Route path="/have_you_seen_this" exact >
        <Have_you_seen_this />
      </Route> */}
  
      <Footer />
    </div>
  );
};
// == Export
export default App;
