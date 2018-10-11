import {
    ADD_ERROR,
    REMOVE_ERROR
} from '../actions/movieConstants';
const initialState = {
    message: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return { ...state,
                message: action.error
            }
        case REMOVE_ERROR:
            return { ...state,
                message: null
            }
        default:
            return state;
    }
}