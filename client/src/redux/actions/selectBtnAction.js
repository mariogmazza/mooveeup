import {
  CHANGE_TO_DECADE_PAGE
} from "./movieConstants";



export const changePageDecade = (submmitCallBack) => {
  return dispatch => {
    dispatch({
      type: CHANGE_TO_DECADE_PAGE,
      payload: true
    });
    submmitCallBack();
  };
};





//this is NOT doing anything usefull