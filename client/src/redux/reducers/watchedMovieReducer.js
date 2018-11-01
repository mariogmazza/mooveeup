import { SET_ALL_WATCHED_MOVIES, SET_CURRENT_WATCHED_MOVIE, DELETE_MOVIE_FROM_WATCHEDLIST } from '../actions/movieConstants';

export const watchedMovies = (state = [], action) => {
    switch (action.type) {
        case SET_ALL_WATCHED_MOVIES:
            return action.data;
        default:
            return state;
    }
};

export const currentWatchedMovie = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_WATCHED_MOVIE:
            return action.data;
        default:
            return state;
    }
}; 

export const deletedWatchedList = (state={}, action)=>{
    switch (action.type) {
        case DELETE_MOVIE_FROM_WATCHEDLIST:
            return action.deletedMsg
        default:
            return state;
    }
}