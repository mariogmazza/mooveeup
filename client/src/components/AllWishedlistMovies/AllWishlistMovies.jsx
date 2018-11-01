import React, { Component } from "react";
import FlipCard from "../FlipCard/FlipCard";
import {
  getAllWished,
  getCurrentWished,
  deleteWished
} from "../../redux/actions/wishedMovieAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapState = state => ({
  auth: state.auth,
  allUserWishedMovies: state.wishedMovies
});

const actions = {
  getAllWished,
  getCurrentWished,
  deleteWished
};

class AllWishlistMovies extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    const { history } = this.props;
    if (!isAuthenticated) return history.push("/");
    const { getAllWished } = this.props;
    getAllWished();
  }

  handleSelect(id) {
    const { history, getCurrentWished } = this.props;
    getCurrentWished(id);
    history.push(`/wished/${id}`);
  }

  handleDelete(id) {
    const { history, deleteWished } = this.props;
    deleteWished(id);
    history.push("/xmovieweb");
  }

  render() {

    console.log(this.props.allUserWishedMovies)

    
    let wished='';
    
    if( this.props.allUserWishedMovies.length > 0 ){

       wished = this.props.allUserWishedMovies.map( movie => (
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
      return <h3>Sorry there's nothing here to see!</h3>
     }


    return (
      <React.Fragment>
        <ul className='Flip_List'>
        {wished}
        </ul>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapState,
    actions
  )(AllWishlistMovies)
);
