import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

import MoviesList from 'src/components/MoviesList';
import './categories.scss';

const SubCategory = ({ resultsCategories, loading, setDescriptionMovie, openModal, setOpenModal, setLoading, closeModal}) => {

  // On défini le state initial
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // On récupère le slug dans l'url
  const {slug} = useParams();

  // Requete ajax pour récupérer les films correspondants à telle catégorie
  const getMovies = () => {
    axios.get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/categories/${slug}`)
    .then((response) => {
      // console.log('repositories :', response.data.items);
      // console.log(`nb : {response.data.total_count}`);
      setMovies(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
    })
  }

  // Au premier rendu du composant on recupère les films 
  useEffect(() => {

    getMovies();
  }, [slug]);

  return (
  <div className="container__categories">
    <nav className="categories__submenu">
      {resultsCategories.map((category) => (
        <NavLink
          className="submenu submenu__item"
          to={`/categories/${category.slug}`}
          key={category.slug}
          activeClassName="submenu submenu__item__selected"
          exact
        >
          {category.name}
        </NavLink>
      ))}
    </nav>  
    
    <h1>{slug}</h1>
    {!isLoading &&  
      <MoviesList movies={movies} loading={loading} setLoading={setLoading} setDescriptionMovie={setDescriptionMovie} openModal={openModal} closeModal={closeModal} setOpenModal={setOpenModal}/>
    }
  </div>
  );
};

export default SubCategory;
