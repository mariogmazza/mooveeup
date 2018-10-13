import React, { Component } from "react";
import { connect } from "react-redux";

import { authUser, logout } from "../../redux/actions/authAction";

import "./form.css"; //temp I need to change to styled-components
import ErrorMessage from "./ErrorMessage";

const mapState = (state)=>({});


const actions = {
  authUser,
  logout
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
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="form-label" htmlFor="username">
            username{" "}
          </label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={this.handleChange}
            autoComplete="off"
            className="form-input"
          />
          <label className="form-label" htmlFor="password">
            password{" "}
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            autoComplete="off"
            className="form-input"
          />
          <div className="buttons_center">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>

        <ErrorMessage/>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(Auth);
