import { SEND_MOVIE_GENRE } from "../actions/movieConstants";

let initialState={}

const getGenreReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_MOVIE_GENRE:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default getGenreReducer;