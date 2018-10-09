import React, { Component } from "react";
import GetMovieBTNStyled from "./GetMovieBTNStyled";
import { connect } from "react-redux";
import { loadMovie } from "../../redux/actions/getMovieAction";
// import MovieCard from '../MovieCard'


const easyOnMeMode = decade => {
    console.log("this is easyMode " + decade);
    let page = 1;
    let pageLimit = 10;
    let movieIndex = 0;
    let maxMovieIndex = 19;
    if (decade === "70") {
      pageLimit = 8;
    }
    page = Math.floor(Math.random() * pageLimit + 1);
    if (page === 8 && decade === "70") {
      maxMovieIndex = 10;
    }
    movieIndex = Math.floor(Math.random() * maxMovieIndex + 1);
    console.log("pages: " + page + " movieIndex: " + movieIndex);
    return { page, movieIndex };
  };


  const actions = {
    loadMovie
  }


  const mapState=state=>({
    decadeString:state.chosenDecadeString.data,
    decadeObject:state.chosenDecadeObject.data,
    finalGenreCode: state.finalSelectedGenre.data
  })

class GetMovieBTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: false,
      clicked: false
    };
  }

  getTheXmovie = () => {
    const { page, movieIndex } = easyOnMeMode(this.props.decadeString);
    if(this.props.decadeObject){
    this.props.loadMovie(page, this.props.decadeObject, movieIndex, this.props.finalGenreCode );
    }

  };
  render() {

    // let thecard;
    // let backDropImg;
    // let finalData=this.props.finalData

    // if (finalData) {
    //   let movieImg = "http://image.tmdb.org/t/p/original/" + finalData.poster_path;

    //   backDropImg = {
    //     backgroundImage: `url(http://image.tmdb.org/t/p/original/${
    //       finalData.backdrop_path
    //     })`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover"
    //   };

    //   thecard = (
    //     <MovieCard
    //       imgPath={movieImg}
    //       title={finalData.title}
    //       relDate={finalData.release_date}
    //       overview={finalData.overview}
    //     />
    //   );
    // } else {
    //   thecard = "";
    //   backDropImg = {};
    // }
 


    return (
      <div>
        {this.props.decadeString ? (
          <div>
          <GetMovieBTNStyled primary onClick={this.getTheXmovie}>
            X MOVIE
          </GetMovieBTNStyled>
          </div>
        ) : (
          <GetMovieBTNStyled onClick={this.getTheXmovie}>
          X MOVIE
          </GetMovieBTNStyled>
        )}
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(GetMovieBTN);

// export default GetMovieBTN
