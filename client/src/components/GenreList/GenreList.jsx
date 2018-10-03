import React, { Component } from "react";
import "./GenreList.css";
import { GenreStyle, Container1, Container2 } from "./ListItemGenre";
import { movieGenre, movieGenreName } from "../../redux/actions/genreAction";
import { connect } from "react-redux";

const genres = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  }
];

const actions = {
  movieGenre,
  movieGenreName
};

const mapState = state => ({});

class GenreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleOnClick = nameOfGenre => {


    this.setState({ clicked: !this.state.clicked });

    let arr = [];
    for (let i in genres) {
      let obj = genres[i];
      if (obj.name === nameOfGenre) {
        arr.push(obj.id);
      }
    }
    this.props.movieGenreName(nameOfGenre);
    this.props.movieGenre(arr[0]);
  };

  render() {
    return (
      <React.Fragment>
        <Container1>
          <Container2 multiple>
            <GenreStyle
              name="Action"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Action
            </GenreStyle>

            <GenreStyle
              name="Adventure"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Adventure
            </GenreStyle>
            <GenreStyle
              name="Animation"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Animation
            </GenreStyle>
            <GenreStyle
              name="Comedy"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Comedy
            </GenreStyle>
            <GenreStyle
              name="Crime"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Crime
            </GenreStyle>
            <GenreStyle
              name="Documentary"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Documentary
            </GenreStyle>
            <GenreStyle
              name="Drama"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Drama
            </GenreStyle>
            <GenreStyle
              name="Family"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Family
            </GenreStyle>
            <GenreStyle
              name="Fantasy"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Fantasy
            </GenreStyle>
            <GenreStyle
              name="History"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              History
            </GenreStyle>
            <GenreStyle
              name="Horror"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Horror
            </GenreStyle>
            <GenreStyle
              name="Music"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Music
            </GenreStyle>
            <GenreStyle
              name="Mystery"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Mystery
            </GenreStyle>
            <GenreStyle
              name="Romance"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Romance
            </GenreStyle>
            <GenreStyle
              name="Science Fiction"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Science Fiction
            </GenreStyle>
            <GenreStyle
              name="TV Movie"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              TV Movie
            </GenreStyle>
            <GenreStyle
              name="Thriller"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Thriller
            </GenreStyle>
            <GenreStyle
              name="War"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              War
            </GenreStyle>
            <GenreStyle
              name="Western"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              Western
            </GenreStyle>
          </Container2>
        </Container1>
      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(GenreList);
