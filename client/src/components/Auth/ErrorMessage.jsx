import React, { Fragment } from "react";
import { connect } from "react-redux";

const mapState = state => ({
  error: state.errorMsg.message
});

const ErrorMessage = ({ error }) => {
  return (
    <Fragment>
        <span style={{fontSize:'10px'}}> 
      {error ? (error.length >= 38 ? error.substring(38, 61) : error) : null}
      </span>
    </Fragment>
  );
};

export default connect(mapState)(ErrorMessage);
