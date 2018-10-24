import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import configureStore from '../redux/store/configureStore';
import { setCurrentUser, setToken } from '../redux/actions/authAction';
import { addError } from '../redux/actions/errorAction';
import decode from 'jwt-decode';

import AuthPage from '../container/pages/AuthPage/Authpage';
import HomePage from '../container/pages/HomePage/HomePage';
import GetRandomMovie from '../container/pages/optionsPage/GetRandomMovie';


import SlidePanelMenu from '../components/MobileNavBar/SlidePanelMenu'
 

const store = configureStore();

if(localStorage.jwtToken){
  setToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch(err){
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

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


          <Route exact path='/slide' component={SlidePanelMenu} />


        </Switch>
    );
  }

export default withRouter(connect(mapState)(App));
