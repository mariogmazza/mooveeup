import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk'


 const configureStoreDev = preloadedState => {
  const middlewares = [thunk];
  const middleWareEnhancers = applyMiddleware(...middlewares);

  const storeEnhancers = [middleWareEnhancers];

  // const composeEnhancers = compose(...storeEnhancers);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose(...storeEnhancers); // add support for Redux dev tools
  const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  // const store = createStore(rootReducer, preloadedState, composeEnhancers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextReducer = require('../reducers/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};


const configureStoreProd=(initialState)=> {
  // const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    // reactRouterMiddleware,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;


export default configureStore;
