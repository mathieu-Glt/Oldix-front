// import movies from 'src/data/movies';

import './modal.scss';

const Modal = ({ movies }) => (
<div id="id01" className="modal">
  <div className="modal__dialog">
        <a href="#" className="closebtn">×</a>
        <h3>{movies[0].title}</h3>
    <div className="modal__content">
      <div className="modal__content__left"> 
        <p><span className="indicator">Synopsis :</span> {movies[0].synopsis}</p>
        <p><span className="indicator">Year :</span> {movies[0].date}</p>
        <p><span className="indicator">Director :</span> {movies[0].director}</p>
        <p><span className="indicator">Categories :</span> {movies[0].category}</p>
        <p><span className="indicator">Actors :</span> {movies[0].actors}</p>
      </div>
      <div className="modal__content__right">
          <iframe width="768" height="432"
          src={movies[0].link} title={movies[0].link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen ></iframe>
      </div>
    </div>
  </div>
</div> 
);

export default Modal;
