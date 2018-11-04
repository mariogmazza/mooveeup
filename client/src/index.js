import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import  store  from "./redux/store/configureStore";
import * as decode from 'jwt-decode';
import { setCurrentUser, setToken } from './redux/actions/authAction';
import { addError } from './redux/actions/errorAction';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./app/App";
import { Provider } from "react-redux";



if(localStorage.jwtToken){
  setToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch(err){
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const user = localStorage.getItem('jwtToken');

if(user) {
  store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
       <App />
   </Router>
  </Provider>,
  document.getElementById("root")
);
