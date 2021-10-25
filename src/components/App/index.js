// == Import

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Carrousel from 'src/components/Carrousel';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Carrousel />
    <Footer />
  </div>
);

// == Export
export default App;
