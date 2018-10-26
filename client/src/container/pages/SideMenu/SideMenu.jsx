import React, { Component } from "react";
import { Redirect } from "react-router";
import { SideNav, MenuIcon, SaveHeart, BackBTN, WatchedIcon } from "./SideMenuStyled";

import menuIcon from "../../../assets/img/menuItem_white.png";
import heartIcon from "../../../assets/img/heartIcon.png";
import backBtnIcon from "../../../assets/img/backBTN.png";
import eyeIcon  from '../../../assets/img/eye.png'
import { connect } from "react-redux";
import { changeMovie } from "../../../redux/actions/getMovieAction";
import { movieGenre, movieGenreName } from "../../../redux/actions/genreAction";
import { changePageDecade } from "../../../redux/actions/selectBtnAction";
import { movieDecadeObject, movieDecadeString } from "../../../redux/actions/decadeAction";
import { openSideMenu } from "../../../redux/actions/sideMenuAction";
import SlidePanelMenu from '../../../components/MobileNavBar/SlidePanelMenu'

const mapState = state => ({
  isOpen: state.openMenu.data 
});

const actions = {
  changeMovie,
  movieGenre,
  movieGenreName,
  changePageDecade,
  movieDecadeObject,
  movieDecadeString,
  openSideMenu
};

class SideMenu extends Component {
  state = {
    toGenrePage: false
  };
  handleBackBTN = () => {
    console.log("BACK BUTTON");

    this.props.changeMovie("");
    this.props.movieGenre("");
    this.props.movieGenreName("");
    this.props.changePageDecade("");
    this.props.movieDecadeObject("");
    this.props.movieDecadeString("");
  };

  handleOpenMenu = () => {
    this.props.openSideMenu(true);
  };

  render() {
    console.log(this.state.toGenrePage);
    if (this.state.toGenrePage === true) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <SideNav>
          <MenuIcon
            onClick={this.handleOpenMenu}
            src={menuIcon}
            alt="menu Icon"
          />
          <WatchedIcon src={eyeIcon}/>
 
          <SaveHeart src={heartIcon} alt="save button" />
          <BackBTN
            onClick={this.handleBackBTN}
            src={backBtnIcon}
            alt="back button"
          />

        </SideNav>

        {this.props.isOpen ? (
          <SlidePanelMenu />
        ) : null}


      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(SideMenu);
