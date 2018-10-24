import { SEND_MOVIE_DECADE_STRING, SEND_MOVIE_DECADE_OBJECT, DECADE_BTN_CLICKED} from '../actions/movieConstants'


export const movieDecadeObject =(decadeObject)=>{
    return {
      type: SEND_MOVIE_DECADE_OBJECT,
      data: decadeObject
    }
  }


  export const movieDecadeString =(decadeString)=>{
      return {
        type: SEND_MOVIE_DECADE_STRING,
        data: decadeString
      }
    }

    export const decadeBtnClicked=(clicked)=>{
      return {
        type: DECADE_BTN_CLICKED,
        data: clicked
      }
    }