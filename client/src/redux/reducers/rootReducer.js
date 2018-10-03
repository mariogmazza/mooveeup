import { combineReducers } from "redux";
import getMovieReducer from "./getMovieReducer";
import getGenreCodeReducer from './getGenreCodeReducer'
import getGenreNameReducer from './getGenreNameReducer'
import selectBtnReducer from './selectBtnReducer'
import getDecadeObjectReducer from "./getDecadeObjectReducer";
import getDecadeStringReducer from "./getDecadeStringReducer";

const rootReducer = combineReducers({
  moviePicked: getMovieReducer,
  genrePicked: getGenreCodeReducer,
  finalSelectedGenre:selectBtnReducer,
  chosenGenreName:getGenreNameReducer,
  chosenDecadeObject:getDecadeObjectReducer,
  chosenDecadeString:getDecadeStringReducer

});

export default rootReducer; 