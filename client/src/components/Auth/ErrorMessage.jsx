import React, { Fragment } from "react";
import { connect } from "react-redux";


const ErrorMessage = ({ error }) => {
  let ans= ''
  if(error.message){
    if(error.message.message === 'Object(...) is not a function' ){
      ans=''
    }else if(error.message.message.length >= 38){
      ans= error.message.message.substring(38, 61);
    }else{
      ans=error.message.message
    }
  }

  return(
  <Fragment>
    {error.message && <span style={{fontSize:'10px'}}>{ans}</span>}
  </Fragment>
  )
}

export default connect(store => ({ error: store.errorMsg }))(ErrorMessage);