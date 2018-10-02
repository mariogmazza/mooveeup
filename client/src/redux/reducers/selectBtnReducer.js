import { CHANGE_TO_DECADE_PAGE } from "../actions/movieConstants";

let initialState={}

const selectBtnReducer = (state = initialState, action) => {
      // console.log(action.data)

    switch (action.type) {
      case CHANGE_TO_DECADE_PAGE:
        return {
            ...state, 
            data: action.payload
        }
      
      default:
        return state;
    }
  };

  export default selectBtnReducer;