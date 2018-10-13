import React from 'react';
import GetRandomMovie from '../container/pages/optionsPage/GetRandomMovie';
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import configureStore from '../redux/store/configureStore';
import { setCurrentUser, setToken } from '../redux/actions/authAction';
import { addError } from '../redux/actions/errorAction';
import decode from 'jwt-decode';

import AuthPage from '../container/pages/AuthPage/Authpage';

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
          <Route exact path='/' component={GetRandomMovie} />
          <Route exact path='/login' render={()=><AuthPage authType='login' isAuthenticated={auth.isAuthenticated}  />} />
          <Route exact path='/register' render={()=><AuthPage authType='register' isAuthenticated={auth.isAuthenticated} />} />

        </Switch>
    );
  }

export default withRouter(connect(mapState)(App));
