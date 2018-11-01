import { SET_ALL_WISHED_MOVIES, SET_CURRENT_WISHED_MOVIE, DELETE_MOVIE_FROM_WISHEDLIST } from '../actions/movieConstants';
import { addError, removeError } from './errorAction';  
import api from '../../../src/services/api';



export const setAllWished= wished=>({
    type:SET_ALL_WISHED_MOVIES,
    data: wished
});

export const setCurrentWished= wished=>({
    type:SET_CURRENT_WISHED_MOVIE,
    data: wished
});

export const deletedWishedMovie=(deletedMsg)=>({
    type: DELETE_MOVIE_FROM_WISHEDLIST,
    deletedMsg
})


export const getAllWished=()=>{
    return async dispatch=>{
        try {
            const allWished = await api.call('get', 'wished/user');
            dispatch(setAllWished(allWished));
            dispatch(removeError());
            
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message))
        }
    }
}

export const saveWished=(data)=>{
    return async dispatch=>{
        try {
            const newWished = await api.call('post','wished', data);
            dispatch(setCurrentWished(newWished));
            dispatch(removeError());

        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message))
        }
    }
}

export const getCurrentWished=(id)=>{
    return async dispatch =>{
        try {
            const wishedMovie = await api.call('get', `wished/${id}`);
            dispatch(setCurrentWished(wishedMovie));
            dispatch(removeError());

        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

export const deleteWished=(id)=>{
    return async dispatch=>{
        try {
            const deleteAction = await api.call('delete',`wished/${id}`);
            dispatch(deletedWishedMovie(deleteAction));
            dispatch(removeError());
        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}