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
import MobileNavBar from "../../../components/MobileNavBar/MobileNavBar";

const mapState = state => ({
  data: state.moviePicked.data,
  finalGenreCode: state.finalSelectedGenre.data,
  hideLogo: state.genreBTNClicked.data,

  chosenGenre: state.chosenGenreName.data
});

class GetRandomMovie extends Component {
  state = {
    data: {}
  };

  render() {
    return (
      <div className="xContainer">
        <div id="speaker" />

        <div className="appContainer">
          {this.props.data ? (
            <FinalDisplay />
          ) : this.props.finalGenreCode ? (
            <div>
              <MobileNavBar />
              {/* <img className="appNameLogo" src={LOGO} alt="Movie picker logo" /> */}
              <h3 className="appSubHeading">Select by:</h3>
              <DecadeBTN />
              <GetMovieBTN />
            </div>
          ) : (
            <React.Fragment>
              <MobileNavBar />

              {this.props.hideLogo ? (
                <React.Fragment>
                  <img
                    className="appNameLogoFadeOut"
                    src={LOGO}
                    alt="Movie picker logo"
                  />
                </React.Fragment>
              ) : (
                <img
                  className="appNameLogo"
                  src={LOGO}
                  alt="Movie picker logo"
                />
              )}

              <h3 className="appSubHeading">
                Select by:
                <span
                  style={{
                    color: "rgb(172, 172, 172)",
                    fontSize: "15px",
                    marginLeft: "20px"
                  }}
                >
                  {this.props.chosenGenre}
                </span>
              </h3>

              <GenreBTN />
              {this.props.hideLogo ? <SelectBTN /> : null}
            </React.Fragment>
          )}
        </div>
        <div id="controlder" />
      </div>
    );
  }
}

export default connect(mapState)(GetRandomMovie);
