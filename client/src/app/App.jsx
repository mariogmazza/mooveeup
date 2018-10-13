import React from 'react';
import GetRandomMovie from '../container/pages/optionsPage/GetRandomMovie';
// import FinalDisplay from '../container/pages/chosenMovieDisplay/FinalDisplay'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import configureStore from '../redux/store/configureStore';
import { setCurrentUser, setToken } from '../redux/actions/authAction';
import { addError } from '../redux/actions/errorAction';
import decode from 'jwt-decode';

import Auth from '../components/Auth/Auth';

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
 
const LoginAuth=()=>{
  return <Auth authType={'login'} />
}

const App = () => {
    
    return (
      <Router>
        <Switch >
          <Route exact path='/' component={GetRandomMovie} />
          <Route path='/authTest' component={LoginAuth} />
        </Switch>
      </Router>
    );
  }

export default App;
