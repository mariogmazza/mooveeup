import React, { Component } from "react";
// import  './GenreBTN.css'
import {GenBtn1, GenBtn2} from './BTNstyle'

const mapState = state => ({
  backGround: state.moviePicked.data
});



class GenreBTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
    clicked: false
    };
  }

  handleOnClick=()=> {
    console.log("Hey you");
    this.setState({ clicked:!this.state.clicked })
  }

  render() {
    const { clicked } = this.state;
    return (
      <div>
      {clicked ? (
        <GenBtn2 onClick={this.handleOnClick}>
        GENRE
       </GenBtn2>
      ):(
      <GenBtn1 onClick={this.handleOnClick}>
        GENRE
      </GenBtn1>
      )}
      </div>
    );
  }
}

export default GenreBTN;
