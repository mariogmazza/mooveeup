import { OPEN_MENU, CLOSE_MENU } from "../actions/movieConstants";

let initialState=false;

const sideMenuReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_MENU:
        return {
            ...state, 
            data: action.data
        }
        case CLOSE_MENU:
        return {
           ...state,
           data: action.data
        }
      
      default:
        return state;
    }
  };

  export default sideMenuReducer;