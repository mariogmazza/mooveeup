import React, { Component } from "react";
import FlipCard from "../FlipCard/FlipCard";
import { getAllWatched, getCurrentWatched, deleteWatched } from "../../redux/actions/watchedMovieAction";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';



const mapState = state => ({
  auth: state.auth,
  allMovies: state.watchedMovies
});

const actions = {
  getAllWatched,
  getCurrentWatched,
  deleteWatched
};

class AllWatchedMovies extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    const {history}= this.props;
    if(!isAuthenticated ) return history.push('/')


    const { getAllWatched } = this.props;
    getAllWatched();
  }

  handleSelect(id) {
    const { history, getCurrentWatched } = this.props;
    getCurrentWatched(id);
    
    history.push(`/watched/${id}`);
  }

  handleDelete(id) {
    const { history, deleteWatched } = this.props;
    console.log(this.props);
    deleteWatched(id);

    history.push("/xmovieweb");
  }

  render() {
    console.log(this.props.allMovies.length)

    let watched='';

    if( this.props.allMovies.length > 0 ){
       watched = this.props.allMovies.map(movie => (
        <FlipCard
          openCard={() => this.handleSelect(movie._id)}
          deleteCard={() => this.handleDelete(movie._id)}
          key={movie._id}
          title={movie.title}
          image={movie.poster_path}
          overview={movie.overview}
        />
      )); 

    }else{
      return <h1>Sorry there's nothing here to see!</h1>
     }


    return (
      <React.Fragment><ul>{watched}</ul></React.Fragment>
    );
  }
}

export default withRouter(connect( mapState, actions)(AllWatchedMovies))
