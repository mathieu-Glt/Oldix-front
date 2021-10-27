// == Import
import { Route, Switch } from 'react-router-dom';


import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Carrousel from 'src/components/Carrousel';
import Thematics from 'src/components/Thematics';

// Import du tableau des Routes
import menuData from 'src/data/menu';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header menu={menuData} />
    <Route path="/" exact >
      <Carrousel />
    </Route>
    <Route path="/thematics" exact >
      <Thematics />
    </Route>
    <Footer />
  </div>
);

// == Export
export default App;
