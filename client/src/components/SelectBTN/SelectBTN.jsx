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
  
  console.log(this.props.pickedGenre)

 this.props.changePageDecade(()=>{this.setState({changeColor:!this.state.changeColor})})

}
  render() {
    return (  
      <div>
        {this.props.pickedGenre ?
        (
          <SelBTNstyle primary onClick={this.submmitGenre}>SELECT</SelBTNstyle>

        ):(
          <SelBTNstyle onClick={this.submmitGenre}>SELECT</SelBTNstyle>

        )
        }
      </div>
    );
  }
}


export default connect(mapState, actions)(SelectBTN)