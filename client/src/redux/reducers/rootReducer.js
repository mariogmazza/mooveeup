import { combineReducers } from "redux";
import getMovieReducer from "./getMovieReducer";
import getGenreReducer from './getGenreReducer'
import selectBtnReducer from './selectBtnReducer'

const rootReducer = combineReducers({
  moviePicked: getMovieReducer,
  genrePicked: getGenreReducer,
  finalSelectedGenre:selectBtnReducer

});

export default rootReducer;