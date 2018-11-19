import React, { Component } from "react";
import { connect } from "react-redux";
import Radium, { StyleRoot } from "radium";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import SlidePanelMenu from "../MobileNavBar/SlidePanelMenu";

import {
  TopNavLeft,
  TopNavRight,
  NavA,
  BurgerIcon,
  IconImg
} from "./NavbarStyled";

import BurgerMenuImg from "../../assets/img/burgerMenu.png";
import { openSideMenu } from "../../redux/actions/sideMenuAction";

const mapState = state => ({
  isOpen: state.openMenu.data
});

const actions = {
  openSideMenu
};

const RadiatingLink = Radium(Link);

class Navbar extends Component {
  handleOpenMenu = () => {
    this.props.openSideMenu(true);
  };

  render() {
    return (
      <React.Fragment>
        <TopNavLeft>
          <RadiatingLink
            to="/"
            style={{
              background: "#c64747",
              color: "#ddd",
              float: "left",
              display: "block",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
              fontSize: "17px",
              ":hover": { background: "#ddd", color: "black" }
            }}
          >
            XMOVIE
          </RadiatingLink>

          <ScrollLink to="features" spy={true} smooth={true} duration={500}>
            <NavA>Features</NavA>
          </ScrollLink>

          <ScrollLink to="findus" spy={true} smooth={true} duration={500}>
            <NavA>Find us</NavA>
          </ScrollLink>

          <RadiatingLink
            to="/xmovieweb"
            style={{
              float: "left",
              display: "block",
              color: "#707070",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
              fontSize: "17px",
              ":hover": {
                backgroundColor: "#ddd",
                color: "black"
              }
            }}
          >
            Try it now
          </RadiatingLink>

          <TopNavRight>
            <StyleRoot>
              <RadiatingLink
                to="/register"
                style={{
                  float: "left",
                  display: "block",
                  backgroundColor: "#c64747",
                  color: "#ddd",
                  textAlign: "center",
                  padding: "14px 16px",
                  textDecoration: "none",
                  fontSize: "17px",
                  ":hover": { backgroundColor: "#ddd", color: "black" },
                  "@media screen and (max-width: 600px)": {
                    display: "none"
                  }
                }}
              >
                Register
              </RadiatingLink>

              <RadiatingLink
                to="/login"
                style={{
                  float: "left",
                  display: "block",
                  color: "#707070",
                  textAlign: "center",
                  padding: "14px 16px",
                  textDecoration: "none",
                  fontSize: "17px",
                  ":hover": {
                    backgroundColor: "#ddd",
                    color: "black"
                  },
                  "@media screen and (max-width: 600px)": {
                    display: "none"
                  }
                }}
              >
                LogIn
              </RadiatingLink>
            </StyleRoot>
          </TopNavRight>

          <BurgerIcon onClick={this.handleOpenMenu}>
            <IconImg src={BurgerMenuImg} />
          </BurgerIcon>
        </TopNavLeft>

        {this.props.isOpen ? <SlidePanelMenu customHeight={'160%'} /> : null}
      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(Navbar);
