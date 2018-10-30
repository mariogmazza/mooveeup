import React from "react";
import "./FlipCard.css";

const FlipCard = ({title, image, openCard, deleteCard }) => {

  return (
    <React.Fragment>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={image}
              alt="Avatar"
              style={{maxWidth:'300px',maxHeight:'300px'}}
            />
          </div>
          <div className="flip-card-back">
            <h1>{title}</h1>
            <button onClick={openCard}>open</button>
            <button >delete</button>

            {/* <button onClick={deleteCard}>delete</button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FlipCard;
