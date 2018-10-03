import { SEND_MOVIE_DECADE_STRING } from "../actions/movieConstants";

let initialState={}

const getDecadeStringReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_MOVIE_DECADE_STRING:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default getDecadeStringReducer;