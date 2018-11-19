import React, { Component } from "react";
import "./slidingMenu.css";
import { connect } from "react-redux";
import { closeSideMenu } from "../../redux/actions/sideMenuAction";
import { Link } from "react-router-dom";

import { changeMovie } from "../../redux/actions/getMovieAction";
import { movieGenre, movieGenreName } from "../../redux/actions/genreAction";
import { changePageDecade } from "../../redux/actions/selectBtnAction";
import { movieDecadeObject, movieDecadeString } from "../../redux/actions/decadeAction";
import { logout } from "../../redux/actions/authAction";

const mapState = state => ({
  isOpen: state.openMenu.data,
  auth: state.auth
});

const actions = {
  closeSideMenu,
  changeMovie,
  movieGenre,
  movieGenreName,
  changePageDecade,
  movieDecadeObject,
  movieDecadeString,
  logout
};

class SlidePanelMenu extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleClose = () => {
    // this.myRef.current.style.width = "0";
    this.props.closeSideMenu(false);
  };

  handleHomeLink = () => {

    this.props.closeSideMenu(false);
    this.props.changeMovie("");
    this.props.movieGenre("");
    this.props.movieGenreName("");
    this.props.changePageDecade("");
    this.props.movieDecadeObject("");
    this.props.movieDecadeString("");
  };

  // handleOpen=()=>{
  //     this.myRef.current.style.width = "80%";
  // }

  //   componentWillReceiveProps = () => {
  //     console.log(this.props.isOpen);
  //     if (this.props.isOpen) {
  //       this.myRef.current.style.width = "80%";
  //     }
  // } else {
  //   this.myRef.current.style.width = "0";
  // }

  render() {
    return (
      <React.Fragment>
        {this.props.isOpen ? (
          <div style={{ width: "80%", height: this.props.customHeight }} className="sidepanel">
            <a className="closebtn" onClick={this.handleClose}>
              ×
            </a>

            {this.props.auth.isAuthenticated ? (
              <a>Hi! {this.props.auth.user.username}</a>
            ) : null}

            <a>
              <Link to="/xmovieweb" onClick={this.handleHomeLink}>
                Home
              </Link>
            </a>

            {this.props.auth.isAuthenticated ? (
              <React.Fragment>
                <a>
                  <Link to="/watched">Watched List</Link>
                </a>
                <a>
                  <Link to="/wishlist">WishList</Link>
                </a>
                <a onClick={this.props.logout}>Logout</a>

              </React.Fragment>
            ) : (
              <React.Fragment>
                <a>
                  <Link to="/login">Login</Link>
                </a>
                <a>
                  <Link to="/register"> Register </Link>
                </a>
              </React.Fragment>
            )}
          </div>
        ) : (
          <div style={{ width: "0%" }} className="sidepanel">
            <a className="closebtn" onClick={this.handleClose}>
              ×
            </a>

            <a>
              <Link to="/xmovieweb">Home</Link>
            </a>
            <a>Login</a>
            <a>Register</a>
            <a>Logout</a>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(SlidePanelMenu);
