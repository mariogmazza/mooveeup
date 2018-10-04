import React, { Component } from "react";
// import axios from "axios";
// import { Button, Dropdown, Container } from "semantic-ui-react";
// import MovieCard from "../components/MovieCard";
import { loadMovie } from "../../../redux/actions/getMovieAction";
import { connect } from "react-redux";
import LOGO from "../../../assets/img/NewLogoXmovie_White.png";
import "./getrandommovie.css";
import GenreBTN from "../../../components/GenreBTN/GenreBTN";
// import GenreList from "../components/GenreList/GenreList";
import SelectBTN from "../../../components/SelectBTN/SelectBTN";
import DecadeBTN from "../../../components/DecadeBTN/DecadeBTN";
import GetMovieBTN from "../../../components/GetMovieBTN/GetMovieBTN";

// const decadeOptions = [
//   {
//     key: 1,
//     text: "2000+",
//     value: "2000"
//   },
//   {
//     key: 2, 
//     text: "90's",
//     value: "90"
//   },
//   {
//     key: 3,
//     text: "80's",
//     value: "80"
//   },
//   {
//     key: 4,
//     text: "70's",
//     value: "70"
//   }
// ];

// const easyOnMeMode = decade => {
//   console.log("this is easyMode " + decade);
//   let page = 1;
//   let pageLimit = 10;
//   let movieIndex = 0;
//   let maxMovieIndex = 19;
//   if (decade === "1970") {
//     pageLimit = 8;
//   }
//   page = Math.floor(Math.random() * pageLimit + 1);
//   if (page === 8 && decade === "1970") {
//     maxMovieIndex = 10;
//   }
//   movieIndex = Math.floor(Math.random() * maxMovieIndex + 1);
//   console.log("pages: " + page + " movieIndex: " + movieIndex);
//   return { page, movieIndex };
// };

// start:"1990-01-01", end:"1999-12-31",finalPage:16}
// {start:"1980-01-01", end:"1989-12-31",finalPage:18}
// {start:"1970-01-01", end:"1979-12-31",finalPage:8}
// {start:"2000-01-01", end:`${presentDate}`, finalPage:75}

const actions = {
  loadMovie
};

const mapState = state => ({
  data: state.moviePicked.data,
  // selectData: state.genrePicked.data,
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

  handleGetTheMovie = () => {
    console.log(this.props.finalGenreCode);

    // const { decade } = this.state;
    // const { page, movieIndex } = easyOnMeMode(decade.start.substring(0, 4));
    //  this.setState({ pickedPage: movieIndex });

    // this.props.loadMovie(page, decade, movieIndex, this.props.selectData);
  };

  // selectedDecade(val) {
  //   const nowDate = new Date();
  //   let month = nowDate.getMonth();
  //   let day = nowDate.getDay();
  //   const year = nowDate.getFullYear();

  //   if (month < 9) {
  //     month = "0" + month;
  //   }

  //   if (day < 9) {
  //     day = "0" + day;
  //   }

  //   const presentDate = year + "-" + month + "-" + day;

  //   if (val === "90") {
  //     this.setState({ decade: { start: "1990-01-01", end: "1999-12-31" } });
  //   } else if (val === "80") {
  //     this.setState({ decade: { start: "1980-01-01", end: "1989-12-31" } });
  //   } else if (val === "70") {
  //     this.setState({ decade: { start: "1970-01-01", end: "1979-12-31" } });
  //   } else if (val === "2000") {
  //     this.setState({ decade: { start: "2000-01-01", end: `${presentDate}` } });
  //   }
  // }

  render() {
    // const { data } = this.props;
    //  const { renderBoolean } = this.props;
    // console.log(this.props.selectData)

    // let thecard;
    // let backDropImg;

    // if (data) {
    //   let movieImg = "http://image.tmdb.org/t/p/original/" + data.poster_path;

    //   backDropImg = {
    //     backgroundImage: `url(http://image.tmdb.org/t/p/original/${
    //       data.backdrop_path
    //     })`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover"
    //   };

    //   thecard = (
    //     <MovieCard
    //       imgPath={movieImg}
    //       title={data.title}
    //       relDate={data.release_date}
    //       overview={data.overview}
    //     />
    //   );
    // } else {
    //   thecard = "";
    //   backDropImg = {};
    // }

    return (
      // <Container style={backDropImg}>
      //   <Dropdown
      //     placeholder="Select a Decade"
      //     fluid
      //     selection
      //     options={decadeOptions}
      //     onChange={(e, { value }) => this.selectedDecade(value)}
      //   />

      //   {thecard}

      //   <Button
      //     primary
      //     onClick={this.handleOnClick}
      //     content={"Get Random Movie"}
      //   />
      // </Container>

      <div className="container">
        <div className="appContainer">
          <img className="appNameLogo" src={LOGO} alt="Movie picker logo" />
          <h3 className="appSubHeading">Select by:</h3>

          {this.props.finalGenreCode ? (
            <div>
              <DecadeBTN />
              <GetMovieBTN />
            </div>
          ) : (
            <div>
              <GenreBTN />
              <SelectBTN />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(GetRandomMovie);
