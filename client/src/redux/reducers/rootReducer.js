import { combineReducers } from "redux";
import getMovieReducer from "./getMovieReducer";

const rootReducer = combineReducers({
  moviePicked: getMovieReducer
});

export default rootReducer;