    import { SEND_MOVIE_GENRE} from '../actions/movieConstants'

export const movieGenre=(newGenre)=>{
    return {
      type: SEND_MOVIE_GENRE,
      data: newGenre
    }
  }