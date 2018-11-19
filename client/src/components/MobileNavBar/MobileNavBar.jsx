import React, { Component } from "react";
import { MobNavDiv, BurgerIconMob, IconImg, NavA } from "./StyledMobileNavBar";
import BurgerMenuImg from "../../assets/img/burgerMenu.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SlidePanelMenu from "./SlidePanelMenu";
import { openSideMenu } from '../../redux/actions/sideMenuAction'

const mapState = state => ({
  showLogo: state.genreBTNClicked.data,
  isOpen: state.openMenu.data
});

const actions={
  openSideMenu
 }

class MobileNavBar extends Component {

  handleOpenMenu =()=> {
    this.props.openSideMenu(true);
  }

  render() {
    const { showLogo } = this.props;
    return (
      <React.Fragment>
        <MobNavDiv>
          {!showLogo ? null : (
            <Link to="/"> 
              <NavA>
                <span style={{ color: "#C64747" }}>X</span>
                MOVIE
              </NavA>
            </Link>
          )}

          <BurgerIconMob onClick={this.handleOpenMenu}>
            <IconImg src={BurgerMenuImg} />
          </BurgerIconMob>
        </MobNavDiv>


        {this.props.isOpen ? (
          <SlidePanelMenu  customHeight={'70%'}/>
        ) : null}


      </React.Fragment>
    );
  }
}

export default connect(mapState, actions)(MobileNavBar);
