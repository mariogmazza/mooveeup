import React, {Fragment}from 'react';
import { connect } from 'react-redux';

const mapState=state=>({
    error: state.errorMsg.message
})

 const ErrorMessage=({error}) => (
     <Fragment>{error}</Fragment>
 )

export default connect(mapState)(ErrorMessage)
