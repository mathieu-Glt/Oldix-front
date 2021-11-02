import React from 'react';
import './modal.scss';

const Modale = ({ revele, cache, results }) => revele ? (
  
  // componentDidMount() {
  //   axios.get(`http://ec2-54-165-199-42.compute-1.amazonaws.com/api/categories/drama`)
  //   .then(res => {
  //     const movies = res.data;
  //     this.setState({ movies });
  //   })
  // },
  
  // state = {
  //   movies: []
  // },

  // render() {
  <React.Fragment>
      <div id={ results[0].slug } className="modal">
        <div className="modal__dialog">
              <button type="button" className="close" onClick={cache}>
                <span>&times;</span>
              </button>
              <h3>{results[0].name}</h3>
          <div className="modal__content">
            <div className="modal__content__left"> 
              <p><span className="indicator">Synopsis :</span> {results[0].synopsis}</p>
              <p><span className="indicator">Year :</span> {results[0].releasedDate}</p>
              <p><span className="indicator">Director :</span> {results[0].realisator}</p>
              <p><span className="indicator">Categories :</span> Drame</p>
              <p><span className="indicator">Actors :</span> JP L'imposteur - JJ LA debrouille</p>
            </div>
            <div className="modal__content__right">
                {/*<iframe width="768" height="432"
                src={results[0].link} title={results[0].link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen ></iframe>*/}
            </div>
          </div>
        </div>
      </div>
  </React.Fragment>
            
): null;

export default Modale;
