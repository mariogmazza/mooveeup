import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'


const DEFAULT_STATE = {
  auth: { isAuthenticated: false }
}; 



//  const configureStore = (preloadedState)=>{
//     const middlewares = [thunk];
//     const middlewareEnhancer = applyMiddleware(...middlewares);

//     const storeEnhancers = [middlewareEnhancer];

//     const composeEnhancer = composeWithDevTools(...storeEnhancers);


//     const store = createStore(

//         rootReducer,
//         preloadedState,
//         composeEnhancer
//     );

//     if(process.env.NODE_ENV !== 'production'){
//         if(module.hot){
//             module.hot.accept('../reducers/rootReducer.js', ()=>{
//                 const newRootReducer = require('../reducers/rootReducer').default;
//                 store.replaceReducer(newRootReducer)
//             })
//         }
//     }

//     return store;
// }


 const configureStore = createStore( rootReducer, DEFAULT_STATE,
  compose( applyMiddleware(thunk) ),
);

export default configureStore