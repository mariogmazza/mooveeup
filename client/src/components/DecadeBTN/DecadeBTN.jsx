import React, { Component } from "react";
// import  './GenreBTN.css'
import { GenBtn1, GenBtn2 } from "./DecadeStyled";
import DecadeList from "../DecadeList/DecadeList";
import DecadeList2 from "../DecadeList/DecadeList2";
import { connect } from "react-redux";

const mapState = state => ({
  chosenDecade: state.chosenDecadeString.data
});

class DecadeBTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleOnClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { clicked } = this.state;
    return (
      <div>
        {clicked ? (
          <React.Fragment>
            <GenBtn2 onClick={this.handleOnClick}>DECADE</GenBtn2>
            <span style={{ color: "rgb(172, 172, 172)" }}>{this.props.chosenDecade}</span>
            <DecadeList />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <GenBtn1 onClick={this.handleOnClick}>DECADE</GenBtn1>
            <DecadeList2 />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect(mapState)(DecadeBTN);
