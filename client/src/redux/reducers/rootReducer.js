import {
  combineReducers
} from "redux";
import getMovieReducer from "./getMovieReducer";
import getGenreCodeReducer from './getGenreCodeReducer'
import getGenreNameReducer from './getGenreNameReducer'
import selectBtnReducer from './selectBtnReducer'
import getDecadeObjectReducer from "./getDecadeObjectReducer";
import getDecadeStringReducer from "./getDecadeStringReducer";
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import genreBtnClickedReducer from './genreBtnClickedReducer';
import decadeBtnClickedReducer from './decadeBtnClickedReducer';

 
const rootReducer = combineReducers({
  moviePicked: getMovieReducer,
  genrePicked: getGenreCodeReducer,
  finalSelectedGenre: selectBtnReducer,
  chosenGenreName: getGenreNameReducer,
  chosenDecadeObject: getDecadeObjectReducer,
  chosenDecadeString: getDecadeStringReducer,
  errorMsg: errorReducer,
  auth: authReducer,
  genreBTNClicked:genreBtnClickedReducer,
  decadeBTNClicked: decadeBtnClickedReducer

});

export default rootReducer;