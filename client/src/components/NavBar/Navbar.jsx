import React from "react";
// import Radium from "radium";
import Radium, { StyleRoot } from "radium";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import {
  TopNavLeft,
  TopNavRight,
  NavA,
  //   NavActiveR,
  BurgerIcon,
  IconImg
} from "./NavbarStyled";

import BurgerMenuImg from "../../assets/img/burgerMenu.png";



const RadiatingLink = Radium(Link);

function Navbar() {
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
          {/* Features */}
        </ScrollLink>

        <ScrollLink to="findus" spy={true} smooth={true} duration={500}>
          <NavA>Find us</NavA>
          {/* Find us */}
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

        <BurgerIcon>
          <IconImg src={BurgerMenuImg} />
        </BurgerIcon>
      </TopNavLeft>
    </React.Fragment>
  );
}

export default Navbar;
