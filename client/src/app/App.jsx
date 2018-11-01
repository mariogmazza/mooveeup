import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import AuthPage from '../container/pages/AuthPage/Authpage';
import HomePage from '../container/pages/HomePage/HomePage';
import GetRandomMovie from '../container/pages/optionsPage/GetRandomMovie';


const mapState=state=>({
  auth:state.auth
}) 
 

const App = ({auth}) => {
    
    return (
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' render={()=><AuthPage authType='login' isAuthenticated={auth.isAuthenticated}  />} />
          <Route exact path='/register' render={()=><AuthPage authType='register' isAuthenticated={auth.isAuthenticated} />} />
          <Route exact path='/xmovieweb' component={GetRandomMovie} />
 
          <Route exact path='/watched' render={()=><AuthPage  route='watched' authType='' isAuthenticated={auth.isAuthenticated} />} />
          <Route exact path='/wishlist' render={()=><AuthPage  route='wished' authType='' isAuthenticated={auth.isAuthenticated} />} />

        </Switch>
    );
  }

export default withRouter(connect(mapState)(App));
