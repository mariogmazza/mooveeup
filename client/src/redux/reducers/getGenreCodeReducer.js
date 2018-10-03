import { SEND_MOVIE_GENRE_CODE } from "../actions/movieConstants";

let initialState={}

const getGenreCodeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_MOVIE_GENRE_CODE:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default getGenreCodeReducer;