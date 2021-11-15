import { useState } from 'react';
import { useHistory } from "react-router-dom";

const SearchBar = ({ isOpen, setIsOpen, handleIsOpen, search, setSearch, loadResults }) => {
  // valeur de l'input de recherche
  // const [search, setSearch] = useState('');

  // const loadResults = () => {

  //   axios.get(`url${search}`)
  //     .then((response) => {
  //       setMovies(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // };
  const history = useHistory();

  const routeChange = () => {
    let path =`/search`;
    history.push(path);
  }

    return (
      <div className={isOpen ? "container__open" : "container__close"}>
          <div className="search-bar" >
            <div className="search-bar__search-icon"><img className={isOpen ? "loop__icon" : "loop__icon__close"} src="https://cdn-icons-png.flaticon.com/128/108/108138.png" onClick={ () =>  handleIsOpen() }></img> </div>
            <div className={isOpen ? "search-bar__search-input" : "search-bar__search-input__close"}>
              <input 
                className={isOpen ? "search-bar__search-input" : "search-bar__search-input__close"} 
                type="text" 
                placeholder="Que cherchez-vous ?" 
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  console.log(e.target.value);
                }}
                />
            </div>
            <button className={isOpen ? "button__search" : "button__search__none"}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              loadResults();
              routeChange();
            }}
             >
               &#10003;
             </button>
          </div>
        </div>
  );
} 

export default SearchBar;
