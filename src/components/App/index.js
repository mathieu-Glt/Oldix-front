// == Import
import { Route, Switch } from 'react-router-dom';


import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Carrousel from 'src/components/Carrousel';
import Thematics from 'src/components/Thematics';
import Categories from 'src/components/Categories';
import ByLanguages from 'src/components/ByLanguages';

// Import du tableau des Routes
import menuData from 'src/data/menu';
import submenuCategories from 'src/data/categories';
import submenuThematics from 'src/data/thematics';
import submenuByLanguages from 'src/data/bylanguages';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header menu={menuData} />
    <Route path="/" exact >
      <Carrousel />
    </Route>
    <Route path="/thematics" exact>
      <Thematics menuThematics={submenuThematics} />
    </Route>
    <Route path="/categories" exact>
      <Categories menuCategories={submenuCategories} />
    </Route>
    <Route path="/by_languages" exact>
      <ByLanguages menuByLanguages={submenuByLanguages} />
    </Route>
    {/* <Route path="/have_you_seen_this" exact >
      <Have_you_seen_this />
    </Route> */}
    <Footer />
  </div>
);
// == Export
export default App;
