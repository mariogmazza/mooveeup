import React, { Component } from "react";
import { connect } from "react-redux";
import "./FinalDisplay.css";
import smallLogo from "../../../assets/img/NewLogoXmovie_White.png";
import SideMenu from "../SideMenu/SideMenu";
import GetMovieBTN from "../../../components/GetMovieBTN/GetMovieBTN";
import BackdropPlaceHolder from "../../../assets/img/Placeholder_Img.jpg";
import PosterPlaceHolder from "../../../assets/img/nCage_placeholder.jpg";

import {
  BackDropImg,
  PosterImg,
  // LogoContainer,
  LogoSmall,
  MovieDesCont,
  MovieYearCont,
  ReleaseTitle,
  YearRelease,
  MovieTitle
} from "./FinalDisplayStyled";

import ErrorMessage from "../../../components/Auth/ErrorMessage";

const mapState = state => ({
  data: state.moviePicked.data
});

class FinalDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move: "34px"
    };
  }

  render() {

    const { data } = this.props;

    let moviePoster = PosterPlaceHolder;
    let backDropImg = BackdropPlaceHolder;
    let overView = data.overview;
    let releaseYear = data.release_date;
    let titleMovie = data.title;

    console.log(releaseYear);

    if (data) {
      if (data.poster_path) {
        moviePoster = `http://image.tmdb.org/t/p/original/${data.poster_path}`;
      }
      if (data.backdrop_path) {
        backDropImg = `http://image.tmdb.org/t/p/original/${
          data.backdrop_path
        }`;
      }
    }

    return (
    
      <div className="finalDisplayContainer">
    
        <LogoSmall src={smallLogo} alt="Movie picker logo" />
        <SideMenu />

        <BackDropImg>
          <div style={{width:'280px', height:'172px'}}>
            <img
              src={backDropImg}
              style={{ width: "100%", height: "100%" }}
              alt="back drop"
            />
          </div>
        </BackDropImg>

        <PosterImg>
          <img
            src={moviePoster}
            style={{ width: "100%", height: "100%" }}
            alt="Movie Poster"
          />
        </PosterImg>

        <MovieYearCont>
          <ReleaseTitle>Release Year</ReleaseTitle>

          <YearRelease>{releaseYear.substring(0, 4)}</YearRelease>
        </MovieYearCont>

        <MovieTitle>{titleMovie}</MovieTitle>

        <MovieDesCont>{overView}</MovieDesCont>

        <ErrorMessage />

        <GetMovieBTN newMargin={true} btnText={"NEW MOVIE"} />
      </div>
    );
  }
}

export default connect(mapState)(FinalDisplay);
