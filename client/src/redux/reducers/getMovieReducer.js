import { GET_RANDOM_MOVIE } from "../actions/movieConstants";

let initialState={}



const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RANDOM_MOVIE:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default movieReducer;