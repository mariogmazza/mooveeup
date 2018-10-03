import { SEND_MOVIE_DECADE_OBJECT } from "../actions/movieConstants";


let initialState={}

const getDecadeObjectReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_MOVIE_DECADE_OBJECT:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default getDecadeObjectReducer;