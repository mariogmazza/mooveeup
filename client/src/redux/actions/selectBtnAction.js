import { CHANGE_TO_DECADE_PAGE } from "./movieConstants";



export const changePageDecade = (genreNumberCode) => {
  return {
    type: CHANGE_TO_DECADE_PAGE,
    data: genreNumberCode
  }
};

// export const changeMovie =(newMovie)=> {
//   return {
//     type: GET_RANDOM_MOVIE,
//     data: newMovie  
//   }
// }