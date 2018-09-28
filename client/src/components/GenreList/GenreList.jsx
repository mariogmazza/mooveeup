import React from "react";
import "./GenreList.css";

export default () => {
  return (
    <React.Fragment>
      <div id="container1">
        <div id="container2">
          <div className="genre-style">Action</div>
          <div className="genre-style">Biography</div>
          <div className="genre-style">Comedy</div>
          <div className="genre-style">Drama</div>
          <div className="genre-style">Documentary</div>
          <div className="genre-style">Family</div>
          <div className="genre-style">Sci-fi</div>
          <div className="genre-style">Sport</div>
        </div>
      </div>
    </React.Fragment>
  );
};
