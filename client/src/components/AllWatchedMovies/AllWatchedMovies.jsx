import React, { Component } from "react";
import FlipCard from "../FlipCard/FlipCard";
import { getAllWatched, getCurrentWatched, deleteWatched } from "../../redux/actions/watchedMovieAction";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import './AllWatchedMovies.css'



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
    deleteWatched(id);

    history.push("/xmovieweb");
  }

  render() {

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
      return (<p>Sorry you have not added
        any movies to this list!
      </p>)
     }


    return (
      <React.Fragment>
        <ul className='Flip_List'>
        {watched}
        </ul>
        <br/>
        </React.Fragment>
    );
  }
}

export default withRouter(connect( mapState, actions)(AllWatchedMovies))
