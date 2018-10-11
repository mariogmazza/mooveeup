import React from 'react';
import GetRandomMovie from '../container/pages/optionsPage/GetRandomMovie';
// import FinalDisplay from '../container/pages/chosenMovieDisplay/FinalDisplay'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from '../redux/store/configureStore';
import { setCurrentUser, setToken } from '../redux/actions/authAction';
import { addError } from '../redux/actions/errorAction';
import decode from 'jwt-decode';

if(localStorage.jwtToken){
  setToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch(err){
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}


const App = () => {
    
    return (
      <Router>
        <Switch >
          <Route exact path='/' component={GetRandomMovie} />
          {/* <Route path='/result' component={FinalDisplay} /> */}
        </Switch>
      </Router>
    );
  }

export default App;
