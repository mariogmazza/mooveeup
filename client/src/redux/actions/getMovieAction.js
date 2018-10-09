import { GET_RANDOM_MOVIE } from "./movieConstants";
import axios from "axios";
require('dotenv').config();



export const loadMovie = (page, decade, pickedPage, genre) => {
  return dispatch => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${
      // process.env.REACT_APP_API_KEY
      'b2ce9d552430f16ed8460e3dce54ba4e'
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${
      decade.start
    }&primary_release_date.lte=${
      decade.end
    }&vote_average.gte=6&with_genres=${genre}`)
    .then(res =>  dispatch(changeMovie(res.data.results[pickedPage]))
    );
  };
};

export const changeMovie=(newMovie)=>{
  return {
    type: GET_RANDOM_MOVIE,
    data: newMovie  
  }
}
