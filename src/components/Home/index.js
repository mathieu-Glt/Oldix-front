import Carrousel from '../Carrousel';
import React from 'react';

import './home.scss';

const Home= ({ resultsCategories }) => {

  return (
    <div>
        { resultsCategories.map(categorie =>   
      <React.Fragment>
        <h1 className="categoriesTitle" >{categorie.name}</h1>
        <Carrousel key={categorie.slug} categories={categorie.slug} />
      </React.Fragment>
      )}
      {/* {console.log(categorie.slug)} */}
    </div>
  )
};

export default Home;
