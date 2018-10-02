import { combineReducers } from "redux";
import getMovieReducer from "./getMovieReducer";
import getGenreReducer from './getGenreReducer'
import getGenreNameReducer from './getGenreNameReducer'
import selectBtnReducer from './selectBtnReducer'

const rootReducer = combineReducers({
  moviePicked: getMovieReducer,
  genrePicked: getGenreReducer,
  finalSelectedGenre:selectBtnReducer,
  chosenGenreName:getGenreNameReducer

});

export default rootReducer;