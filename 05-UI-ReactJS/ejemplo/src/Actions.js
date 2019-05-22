const ADD_MOVIE = 'add_movie';
const REMOVE_MOVIE = 'remove_movie';
const EDIT_MOVIE = 'edit_movie';

function addMovie(payload) {
  return {
    type: ADD_MOVIE,
    payload
  }
}

function removeMovie(id) {
  return {
    type: REMOVE_MOVIE,
    payload: {
      id
    }
  }
}

function editMovie(payload) {
  return {
    type: EDIT_MOVIE,
    payload

  }
}

export { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, addMovie, removeMovie, editMovie }