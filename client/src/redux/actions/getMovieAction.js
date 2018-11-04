import { GET_RANDOM_MOVIE } from "./movieConstants";
import { addError, removeError } from "./errorAction";
import api from "../../services/api";


export const changeMovie =(newMovie)=>({
  type: GET_RANDOM_MOVIE,
  data: newMovie
});




export const loadMovie = (page, decade, pickedPage, genre) => {

  const data = {page, decade, pickedPage, genre};

  return async dispatch => {
    try {
      const  {...movieObj} = await api.call('post','getmovie/', data);

        dispatch(changeMovie(movieObj)) 
        dispatch(removeError())
    } catch (err) {
      const error  = err.message;
      dispatch(addError(error));
    }

  }
};


