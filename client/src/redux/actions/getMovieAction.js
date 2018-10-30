import { GET_RANDOM_MOVIE } from "./movieConstants";
// import axios from "axios";
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
      console.log(movieObj)

        dispatch(changeMovie(movieObj)) 
        dispatch(removeError())
    } catch (err) {
      const error  = err.message;
      dispatch(addError(error));
    }

  }
};




 
// export const authUser = (path, data) => {
//   return async dispatch => {
//     try {
//       const { token, ...user } = await api.call('post', `auth/${path}`, data);
//       localStorage.setItem('jwtToken', token);
//       api.setToken(token);
//       dispatch(setCurrentUser(user));
//       dispatch(removeError());
//     } catch (err) {
//       const { error } = err.response.data;
//       dispatch(addError(error));
//     }
//   };
// };

// export const changeMovie = newMovie => {
//   return {
//     type: GET_RANDOM_MOVIE,
//     data: newMovie
//   };
// };
