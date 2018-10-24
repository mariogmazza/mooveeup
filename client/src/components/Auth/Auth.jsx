import React, { Component } from "react";
import "./Auth.css";
import logoWhite from "../../assets/img/NewLogoXmovie_White.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authUser, logout } from "../../redux/actions/authAction";
import { closeSideMenu } from '../../redux/actions/sideMenuAction'

import ErrorMessage from "./ErrorMessage";

const mapState = state => ({});

const actions = {
  authUser,
  logout,
  closeSideMenu
};

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { username, password } = this.state;
    const { authType } = this.props;

    e.preventDefault();
    this.props.authUser(authType || "login", { username, password });
    this.props.closeSideMenu(false);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="xContainer2">
        <div id="speaker2" />

        <div className="appContainer">
          <div className="loginbox">

          <Link to='/xmovieweb'>
            <img src={logoWhite} className="avatar" alt="" />
           </Link>

            <h1 className="authHeading">
              {this.props.authType === "login" ? "Login" : "Register"}
            </h1>

            <ErrorMessage />

            <form onSubmit={this.handleSubmit}>
              <p className="formLabel">Username</p>
              <input
                type="text"
                value={username}
                name="username"
                onChange={this.handleChange}
                autoComplete="off"
                className="formInput"
                placeholder="Enter Username"
              />
              <p className="formLabel">Password</p>
              <input
                type="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                autoComplete="off"
                className="formInput"
                placeholder="Enter Password"
              />

              {this.props.authType === "login" ? (
                <React.Fragment>
                  <input
                    className="formInput"
                    type="submit"
                    name=""
                    value="Login"
                  />
                  <a href="/">Forgot your password? </a>
                  <br />
                  <Link to="/register">Don't have an account? </Link>
                </React.Fragment>

              ) :(
                <React.Fragment>
                <input
                  className="formInput"
                  type="submit"
                  name=""
                  value="Submit"
                />
                <a href="/">Forgot your password? </a>
                <br />
              </React.Fragment>

              )}
            </form>
          </div>
        </div>

        <div id="fakeHomebtn" />
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(Auth);
