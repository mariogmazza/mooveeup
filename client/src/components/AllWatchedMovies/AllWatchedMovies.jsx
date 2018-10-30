import React, { Component } from 'react'
import FlipCard from '../FlipCard/FlipCard';
import { getAllWatched, getCurrentWatched } from '../../redux/actions/watchedMovieAction';
import { connect } from 'react-redux';

const mapState=state=>({
  auth: state.auth,
  allMovies: state.watchedMovies
});

const actions={
  getAllWatched,
  getCurrentWatched
}


 class AllWatchedMovies extends Component {
  constructor(props){
    super(props);


    this.handleSelect = this.handleSelect.bind(this);

  }

  componentDidMount(){
    console.log(this.props.auth.isAuthenticated)
    const {getAllWatched}= this.props;
    getAllWatched();
  }

  handleSelect(id) {
    const { history, getCurrentWatched } = this.props;
    getCurrentWatched(id);

    history.push(`/watched/${id}`);
  }

  render() {


    const watched = this.props.allMovies.map(movie => (
       <FlipCard  openCard={() => this.handleSelect(movie._id)} key={movie._id}  title={movie.title} image={movie.poster_path} />
        
    ));

    return (
      <React.Fragment>
        {this.props.auth.isAuthenticated && (
        <ul>{watched}</ul>

        )} 
      </React.Fragment>
    )
  }
}


export default connect(mapState, actions)(AllWatchedMovies)