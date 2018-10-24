import React, { Component } from "react";
import { SideNav, MenuIcon, SaveHeart, BackBTN } from "./SideMenuStyled";
import menuIcon from "../../../assets/img/menuItem_white.png";
import heartIcon from "../../../assets/img/heartIcon.png";
import backBtnIcon from "../../../assets/img/backBTN.png";
import { connect } from "react-redux";
import { changeMovie } from "../../../redux/actions/getMovieAction";
import { movieGenre, movieGenreName } from '../../../redux/actions/genreAction'
import { changePageDecade } from '../../../redux/actions/selectBtnAction'
import { movieDecadeObject } from '../../../redux/actions/decadeAction'
import { Redirect } from 'react-router'

const mapState = state => ({});

const actions = {
  changeMovie,
  movieGenre,
  movieGenreName,
  changePageDecade,
  movieDecadeObject
};

class SideMenu extends Component {
  state = {
    toGenrePage: false
  };
  handleBackBTN = () => {
    console.log('BACK BUTTON')
    // this.setState(()=>({ toGenrePage: true }))

     this.props.changeMovie('')
     this.props.movieGenre('')
     this.props.movieGenreName('')
     this.props.changePageDecade('')
     this.props.movieDecadeObject('')

  };
  render() {
      console.log(this.state.toGenrePage)
    if (this.state.toGenrePage === true) {
        return <Redirect to='/' />
      }
    return (
      <React.Fragment>
        <SideNav>
          <MenuIcon src={menuIcon} alt="menu Icon" />
          <SaveHeart src={heartIcon} alt="save button" />
          <BackBTN
            onClick={this.handleBackBTN}
            src={backBtnIcon}
            alt="back button"
          />
        </SideNav>
      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(SideMenu);
