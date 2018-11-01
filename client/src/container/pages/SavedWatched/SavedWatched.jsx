import React, { Component } from "react";
import "./SavedWatched.css";
import AllWatchedMovies from "../../../components/AllWatchedMovies/AllWatchedMovies";
import MobileNavBar from "../../../components/MobileNavBar/MobileNavBar";

class SavedWatched extends Component {
  render() {
    return (
      <div className="Save_Container">
        <div id="Save_speaker" />
        <div className="Save_AppContainer">
          <MobileNavBar />
          <AllWatchedMovies />
        </div>
        <div id="Save_controlder"> </div>
      </div>
    );
  }
}

export default SavedWatched;
