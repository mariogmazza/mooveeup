import React, { Component } from "react";
// import  './GenreBTN.css'
import {GenBtn1, GenBtn2} from './GenreStyled'
import GenreList from '../GenreList/GenreList'
import GenreList2 from '../GenreList/GenreList2'
import { connect } from 'react-redux'


const mapState=state=>({
  chosenGenre:state.chosenGenreName.data
})


class GenreBTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
    clicked: false
    };
  }

  handleOnClick=()=> {
    this.setState({ clicked:!this.state.clicked })
  }

  render() {

    const { clicked } = this.state;
    return (
      <div>
      {clicked ? (
        <React.Fragment>
        <GenBtn2 onClick={this.handleOnClick}>
        GENRE 
       </GenBtn2>
       <span style={{color:'rgb(172, 172, 172)'}}>{this.props.chosenGenre}</span>
       <GenreList />
       </React.Fragment>
      ):(
        <React.Fragment>
      <GenBtn1 onClick={this.handleOnClick}>
        GENRE
      </GenBtn1>
       <GenreList2 />
       </React.Fragment>
      )}
      </div>
    );
  }
}

export default connect(mapState)(GenreBTN)
