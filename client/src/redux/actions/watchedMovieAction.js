import { SET_ALL_WATCHED_MOVIES, SET_CURRENT_WATCHED_MOVIE } from '../actions/movieConstants';
import { addError, removeError } from './errorAction';  
import api from '../../../src/services/api';



export const setAllWatched= watched=>({
    type:SET_ALL_WATCHED_MOVIES,
    data: watched
});

export const setCurrentWatched= watched=>({
    type:SET_CURRENT_WATCHED_MOVIE,
    data:watched
});


export const getAllWatched=()=>{
    return async dispatch=>{
        try {
            const allWatched = await api.call('get', 'watched/user');
            dispatch(setAllWatched(allWatched));
            dispatch(removeError());
            
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message))
        }
    }
}

export const saveWatched=(data)=>{
    return async dispatch=>{
        try {
            const newWatched = await api.call('post', 'watched', data);
            dispatch(setCurrentWatched(newWatched));
            dispatch(removeError());

        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message))
        }
    }
}

export const getCurrentWatched=(id)=>{
    return async dispatch =>{
        try {
            const watchedMovie = await api.call('get', `watched/${id}`);
            dispatch(setCurrentWatched(watchedMovie));
            dispatch(removeError());

        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}