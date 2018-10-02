import { SEND_MOVIE_GENRE_NAME } from "../actions/movieConstants";

let initialState={} //here I could set the initial state to be "Action"

const getGenreNameReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_MOVIE_GENRE_NAME:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default getGenreNameReducer;