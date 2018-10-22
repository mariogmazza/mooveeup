import React, { Component } from "react";
import SelBTNstyle from "./SelectBTNStyled";
import { connect } from "react-redux";
import { changePageDecade } from "../../redux/actions/selectBtnAction";

const mapState = state => ({
  pickedGenre: state.genrePicked.data
});

const actions = {
  changePageDecade
};

class SelectBTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: false,
      clicked: false
    };
  }

  submmitGenre = () => {
    console.log(this.props.pickedGenre);

    this.props.changePageDecade(this.props.pickedGenre);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.pickedGenre ? (
          <SelBTNstyle primary onClick={this.submmitGenre}>
            SELECT
          </SelBTNstyle>
        ) : (
          <SelBTNstyle onClick={this.submmitGenre}>SELECT</SelBTNstyle>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  mapState,
  actions
)(SelectBTN);
