import React from "react";
import "./FlipCard.css";

import PosterPlaceHolder from "../../assets/img/nCage_placeholder.jpg";

const FlipCard = ({title, image, openCard, deleteCard, overview }) => {

  let moviePoster = PosterPlaceHolder;

  if (image) {
      moviePoster = `http://image.tmdb.org/t/p/original/${image}`;
    }
  

  return (
    <React.Fragment>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={moviePoster}
              alt="Poster"
              style={{maxWidth:'100%',maxHeight:'100%'}}
            />
          </div>
          <div className="flip-card-back">
            <h1>{title}</h1>
            <p>{overview}</p>
            <button className='btn_flip_open' onClick={openCard}>open</button>

            <button className='btn_flip_delete' onClick={deleteCard}>delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FlipCard;
