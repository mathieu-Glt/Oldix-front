import Carrousel from '../Carrousel';
import React from 'react';

import './home.scss';

const Home= ({ resultsCategories }) => {

  return (
    <div>
        { resultsCategories.map(categorie =>   
      <React.Fragment>
        <h1 className="categoriesTitle">{categorie.name}</h1>
        <Carrousel resultsCategories={resultsCategories} />
      </React.Fragment>
      )}
      {/* {console.log(resultsCategories[0].slug)} */}
    </div>
  )
};

export default Home;
