import React, { Component } from "react";
import SelBTNstyle from "./SelBTNstyle";
import {connect} from 'react-redux'
import {changePageDecade} from '../../redux/actions/selectBtnAction'

const mapState= state =>({
  pickedGenre:state.genrePicked.data
})

const actions={
  changePageDecade
}

class SelectBTN extends Component {
  constructor(props){
    super(props);
    this.state={
      changeColor:false,
      clicked:false
    }
  }
  
submmitGenre=()=>{
  // this.setState({
  //   clicked: true
  // })
  console.log("before")
  console.log(this.state.changeColor)

 this.props.changePageDecade(()=>{this.setState({changeColor:!this.state.changeColor})})
 console.log("after")
 console.log(this.state.changeColor)

}
  render() {
    return (  
      <div>
        {this.state.changeColor ?
        (
          <SelBTNstyle primary onClick={this.submmitGenre}>GO</SelBTNstyle>

        ):(
          <SelBTNstyle onClick={this.submmitGenre}>GO</SelBTNstyle>

        )
        }
      </div>
    );
  }
}


export default connect(mapState, actions)(SelectBTN)