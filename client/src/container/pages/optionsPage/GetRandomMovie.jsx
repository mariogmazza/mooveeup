import React, { Component } from "react";
import { connect } from "react-redux";
import LOGO from "../../../assets/img/NewLogoXmovie_White.png";
import "./getrandommovie.css";
import GenreBTN from "../../../components/GenreBTN/GenreBTN";
import SelectBTN from "../../../components/SelectBTN/SelectBTN";
import DecadeBTN from "../../../components/DecadeBTN/DecadeBTN";
import GetMovieBTN from "../../../components/GetMovieBTN/GetMovieBTN";
import FinalDisplay from "../chosenMovieDisplay/FinalDisplay";
import MobileNavBar from "../../../components/MobileNavBar/MobileNavBar";

const mapState = state => ({
  data: state.moviePicked.data,
  finalGenreCode: state.finalSelectedGenre.data,
  hideLogo: state.genreBTNClicked.data,
  chosenDecade: state.chosenDecadeString.data,
  chosenGenre: state.chosenGenreName.data,
  hideXmovieBTN: state.decadeBTNClicked.data
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

            <React.Fragment>

              <MobileNavBar />

              <h3 className="appSubHeading">
                Select by:
                <span
                  style={{
                    color: "rgb(172, 172, 172)",
                    fontSize: "15px",
                    marginLeft: "20px"
                  }}
                >
                  {this.props.chosenDecade}
                </span>
              </h3>
              <DecadeBTN />
              {this.props.hideXmovieBTN ? (
                <GetMovieBTN btnText={"X MOVIE"} />
              ) : null}
            </React.Fragment>
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
        <div id="controlder"> </div>
      </div>
    );
  }
}

export default connect(mapState)(GetRandomMovie);
