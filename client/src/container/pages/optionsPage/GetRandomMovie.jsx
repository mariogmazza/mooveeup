import React, { Component } from "react";
import { connect } from "react-redux";
import LOGO from "../../../assets/img/NewLogoXmovie_White.png";
import "./getrandommovie.css";
import GenreBTN from "../../../components/GenreBTN/GenreBTN";
import SelectBTN from "../../../components/SelectBTN/SelectBTN";
import DecadeBTN from "../../../components/DecadeBTN/DecadeBTN";
import GetMovieBTN from "../../../components/GetMovieBTN/GetMovieBTN";
import FinalDisplay from "../chosenMovieDisplay/FinalDisplay";
import Navbar from "../../../components/NavBar/Navbar";

const mapState = state => ({
  data: state.moviePicked.data,
  finalGenreCode: state.finalSelectedGenre.data
});

class GetRandomMovie extends Component {
  state = {
    data: "",
    decade: {
      start: "1970-01-01",
      end: "1999-12-31"
    }
  };

  render() {
    return (
      <div className="container">
        <div className="appContainer">
          {this.props.data ? (
            <FinalDisplay />
          ) : this.props.finalGenreCode ? (
            <div>
              <Navbar />
              <img className="appNameLogo" src={LOGO} alt="Movie picker logo" />
              <h3 className="appSubHeading">Select by:</h3>
              <DecadeBTN />
              <GetMovieBTN />
            </div>
          ) : (
            <div>
              <Navbar />
              <img className="appNameLogo" src={LOGO} alt="Movie picker logo" />
              <h3 className="appSubHeading">Select by:</h3>
              <GenreBTN />
              <SelectBTN />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapState)(GetRandomMovie);
