    import { SEND_MOVIE_GENRE_CODE, SEND_MOVIE_GENRE_NAME} from '../actions/movieConstants'


export const movieGenre=(genreCode)=>{
    return {
      type: SEND_MOVIE_GENRE_CODE,
      data: genreCode
    }
  }


  export const movieGenreName=(genreName)=>{
      return {
        type: SEND_MOVIE_GENRE_NAME,
        data: genreName
      }
    }