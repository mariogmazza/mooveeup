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
import { saveWatched } from '../../../redux/actions/watchedMovieAction'
import { saveWished } from '../../../redux/actions/wishedMovieAction'
import { openSideMenu } from "../../../redux/actions/sideMenuAction";
import SlidePanelMenu from '../../../components/MobileNavBar/SlidePanelMenu'

const mapState = state => ({ 
  isOpen: state.openMenu.data, 
  currMovie: state.moviePicked.data
});
   
const actions = {
  changeMovie,
  movieGenre,
  movieGenreName,
  changePageDecade,
  movieDecadeObject,
  movieDecadeString,
  openSideMenu,
  saveWatched,
  saveWished
};

class SideMenu extends Component {
  state = {
    toGenrePage: false
  };
  handleBackBTN = () => {

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

  handleSaveWatched=()=>{
    this.props.saveWatched(this.props.currMovie)
  }

  handleSaveWished=()=>{
    this.props.saveWished(this.props.currMovie)
  } 

  render() {
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
          <WatchedIcon 
          onClick={this.handleSaveWatched}
          src={eyeIcon}
          alt='watched'
          />
 
          <SaveHeart 
          onClick={this.handleSaveWished}
          src={heartIcon} 
          alt="save button" 
          />
          <BackBTN
            onClick={this.handleBackBTN}
            src={backBtnIcon}
            alt="back button"
          />

        </SideNav>

        {this.props.isOpen ? (
          <SlidePanelMenu customHeight={'70%'} />
        ) : null}


      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(SideMenu);
