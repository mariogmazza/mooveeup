import React from 'react';
import { Redirect } from 'react-router-dom'

import Auth from '../../../components/Auth/Auth';


const Authpage = ({ authType, isAuthenticated }) => {
    if(isAuthenticated) return <Redirect to='/xmovieweb' />
  return (
    <div>
        <Auth authType={authType} />
    </div>
  )
}

export default Authpage


