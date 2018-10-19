import React from 'react';
import { Redirect } from 'react-router-dom'

import Auth from '../../../components/Auth/Auth';
import ErrorMessage from '../../../components/Auth/ErrorMessage';


const Authpage = ({ authType, isAuthenticated }) => {
    if(isAuthenticated) return <Redirect to='/xmovieweb' />
  return (
    <div>
        <ErrorMessage />
        <Auth authType={authType} />
      
    </div>
  )
}

export default Authpage


