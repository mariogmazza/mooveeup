import React, { Component } from "react";
import "./SavedWished.css";
import MobileNavBar from "../../../components/MobileNavBar/MobileNavBar";
import AllWishlistMovies from "../../../components/AllWishedlistMovies/AllWishlistMovies";

class SavedWished extends Component {
  render() {
    return (
      <div className="Save_Wish_Container">
        <div id="Save_Wish_speaker" />
        <div className="Save_Wish_AppContainer">
          <MobileNavBar />
          <AllWishlistMovies />
        </div>
        <div id="Save_Wish_controlder"> </div>
      </div>
    );
  }
}

export default SavedWished;