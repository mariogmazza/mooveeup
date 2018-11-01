import { SET_ALL_WISHED_MOVIES, SET_CURRENT_WISHED_MOVIE, DELETE_MOVIE_FROM_WISHEDLIST } from '../actions/movieConstants';

export const wishedMovies = (state = [], action) => {
    switch (action.type) {
        case SET_ALL_WISHED_MOVIES:
            return action.data;
        default:
            return state;
    }
};

export const currentWishedMovie = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_WISHED_MOVIE:
            return action.data;
        default:
            return state;
    }
}; 

export const deletedWishedList = (state={}, action)=>{
    switch (action.type) {
        case DELETE_MOVIE_FROM_WISHEDLIST:
            return action.deletedMsg
        default:
            return state;
    }
}