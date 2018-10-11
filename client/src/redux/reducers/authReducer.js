import { SET_CURRENT_USER } from '../actions/movieConstants';

const initialState={
    isAuthenticated: false,
    user: {}
};

const authReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !!Object.keys(action.user).length,
                user:action.user
            }
    
        default:
            return state;
    }
}

export default authReducer