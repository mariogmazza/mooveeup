import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import "./HomePage.css";
import AppImg from "../../../assets/img/App_img.png";
import FeatureImg from "../../../assets/img/feature_img.png";
import GoogleImg from "../../../assets/img/googlePlay.png";
import AppleImg from "../../../assets/img/appStore.png";
import Navbar from "../../../components/NavBar/Navbar";

const HomePage = () => {
  return (
    <Container>
      <Element name="hometop" />
      
      <Navbar />

      <div class="hero">
        <div class="hero_spacer" />
        <div class="hero_text">
          Enjoy your favorites movies
          <br />
          even more with us
          <br />
          <p class="hero_para_text">
            Struggling when choosing a movie?
            <br />
            Want to manage the movies you watch?
            <br />
            Every film fan will love our app.
          </p>
          <button className="hero_get_the_app_btn">
            <Link
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold"
              }}
              to="/xmovieweb"
            >
              TRY IT NOW
            </Link>
          </button>
          <p class="hero_info">* no registration required</p>
        </div>

        <div class="hero_app_phone">
          <img class="hero_app_phone_img" src={AppImg} alt="" />
        </div>
      </div>

      <Element name="features" />

      <div class="features">
        <div class="features_img_div">
          <img class="feat_img" src={FeatureImg} alt="" />
        </div>
        <div class="features_spacer"> </div>

        <div class="features_text">
          Improve your film experience
          <br />
          <p class="features_para">
            With so many streaming services and options to watch any movie or TV
            show at the tip of your fingers, it's easy to get overwhelmed.
            XMOVIE is here to help you make an easy and fast decision so you can
            get on with your life and just enjoy the pleasure of watching a
            movie without the hassle of endless scrolling{" "}
            <span role="img" aria-label="smile">
              😁
            </span>
          </p>
        </div>
      </div>

      <Element name="findus" />

      <div class="findus">
        <button class="findus_get_the_app_btn">GET THE APP</button>

        <div class="findus_title">Don't wait and download the app!</div>

        <div class="findus_spacer" />
        <img class="findus_icon_google" src={GoogleImg} alt="" />
        <img class="findus_icon_apple" src={AppleImg} alt="" />

        <div class="findus_links">
          <ul>
            <li>Navigation</li>
            <li><ScrollLink style={{color:'white'}} to='hometop' spy={true} smooth={true} duration={500} > Home </ScrollLink> </li>
            <li><ScrollLink style={{color:'white'}} to='features' spy={true} smooth={true} duration={500} > Features </ScrollLink> </li>
          </ul>

          <ul>
            <li>Community</li>
            <li>Facebook</li>
            <li>Tweeter</li>
          </ul>

          <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
