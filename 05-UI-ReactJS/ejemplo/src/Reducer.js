import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from './Actions.js'
import { v4 } from 'uuid';

const initialState = {
  movies: [
    { id: v4(), duration: '02:30', title: "Terminator", year: "1996" },
    { id: v4(), duration: '01:30', title: "Ironman", year: "2000" }
  ]
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      const info = action.payload
      const movie = {
        id: v4(),
        duration: info.duration,
        title: info.title,
        year: info.year
      }
      return { ...state, movies: state.movies.concat(movie) }
    case REMOVE_MOVIE:
      let infoId = action.payload
      const newMovies = state.movies.filter(movie => {
        return infoId.id !== movie.id
      })
      return { ...state, movies: newMovies }
    case EDIT_MOVIE:
      const infoMovie = action.payload
      const moviesEdit = state.movies.slice()
      moviesEdit.map((movie) => {
        if (infoMovie.id === movie.id) {
          movie.id = infoMovie.id
          movie.title = infoMovie.title
          movie.duration = infoMovie.duration
          movie.year = infoMovie.year
        }
        return movie
      })
      return { ...state, movies: moviesEdit }

    default:
      return state
  }
}

export default reducer