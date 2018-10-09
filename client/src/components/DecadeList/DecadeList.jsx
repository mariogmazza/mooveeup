import React, { Component } from "react";
// import "./GenreList.css";
import { DecadeStyle, Container1, Container2 } from "./ListItemDecade";
import {
  movieDecadeObject,
  movieDecadeString
} from "../../redux/actions/decadeAction";
import { connect } from "react-redux";

const selectedDecade = val => {
  let nowDate = new Date();
  let n = nowDate.toISOString();

  let month = n.substring(5, 7);
  let day = n.substring(8, 10);
  const  year = n.substring(0,4)

  // if (month <= 9) {
  //   month = "0" + month;
  // }

  // if (day <= 9) {
  //   day = "0" + day;
  // }

  const presentDate = year + "-" + month + "-" + day;
  console.log(presentDate)

  if (val === "90") {
    return { start: "1990-01-01", end: "1999-12-31" };
  } else if (val === "80") {
    return { start: "1980-01-01", end: "1989-12-31" };
  } else if (val === "70") {
    return { start: "1970-01-01", end: "1979-12-31" };
  } else if (val === "2000") {
    return { start: "2000-01-01", end: `${presentDate}` };
  }
};

const actions = {
  movieDecadeObject,
  movieDecadeString
};

const mapState = state => ({});

class DecadeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleOnClick = chosenDecade => {
    this.props.movieDecadeString(chosenDecade);
    let decade = selectedDecade(chosenDecade);
    this.props.movieDecadeObject(decade);
  };

  render() {
    return (
      <React.Fragment>
        <Container1>
          <Container2 multiple>
            <DecadeStyle
              name="2000"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              2000+
            </DecadeStyle>

            <DecadeStyle
              name="90"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              90's
            </DecadeStyle>
            <DecadeStyle
              name="80"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              80's
            </DecadeStyle>
            <DecadeStyle
              name="70"
              onClick={e => this.handleOnClick(e.target.getAttribute("name"))}
            >
              70's
            </DecadeStyle>
          </Container2>
        </Container1>
      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(DecadeList);
