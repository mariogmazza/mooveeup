import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk'


export const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middleWareEnhancers = applyMiddleware(...middlewares);

  const storeEnhancers = [middleWareEnhancers];

  const composeEnhancers = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);

  return store;
};