    import { SEND_MOVIE_GENRE_CODE, SEND_MOVIE_GENRE_NAME, GENRE_BTN_CLICKED} from '../actions/movieConstants'


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

  export const genreBtnClicked=(clicked)=>{
    return {
      type: GENRE_BTN_CLICKED,
      data: clicked
    }
  }