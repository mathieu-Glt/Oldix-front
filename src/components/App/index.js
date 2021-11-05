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

// Import du tableau des Routes
import menuData from 'src/data/menu';
import submenuCategories from 'src/data/categories';
import submenuThematics from 'src/data/thematics';
import submenuByLanguages from 'src/data/bylanguages';
import movies from 'src/data/movies';

import './styles.css';

// == Composant
const App = () => { 
  // Toutes les catégories
  const [resultsCategories, setResultsCategories] = useState([]);

  const getMoviesCategories = () => {
    axios.get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/categories`)
    .then((response) => {
      // console.log('repositories :', response.data.items);
      // console.log(`nb : {response.data.total_count}`);
      setResultsCategories(response.data);
      console.log(response.data)
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

  return (
    <div className="app">
      <Header menu={menuData} />
      <Route path="/" exact >
        <Home resultsCategories={resultsCategories} />
      </Route>
      <Route path="/thematics" exact>
        <Thematics menuThematics={submenuThematics} />
      </Route>
      <Route path="/categories" exact>
        <Categories menuCategories={submenuCategories} />
      </Route>
      <Route path="/by_languages" exact>
        <ByLanguages menuByLanguages={submenuByLanguages} movies={movies} />
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
