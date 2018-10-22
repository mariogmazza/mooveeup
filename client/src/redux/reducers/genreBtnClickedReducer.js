import { GENRE_BTN_CLICKED } from "../actions/movieConstants";

let initialState=false //here I could set the initial state to be "Action"

const genreBtnClickedReducer = (state = initialState, action) => {
    switch (action.type) {
      case GENRE_BTN_CLICKED:
        return {
            ...state, 
            data: action.data
        }
      
      default:
        return state;
    }
  };

  export default genreBtnClickedReducer;