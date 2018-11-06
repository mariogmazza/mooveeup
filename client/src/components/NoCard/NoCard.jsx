import React from "react";
import './NoCard.css'

function NoCard({header, message}) {
  return (
    <React.Fragment>
      <div class="row">
        <div class="column">
          <div class="card">
            <h3>{header}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NoCard;
