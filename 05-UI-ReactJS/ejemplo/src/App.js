import React, { Component } from 'react'
import Form from './Form'
import MoviesList from './MoviesList'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Create movie</h1>
        <Form />
        <h1>Movies List</h1>
        <MoviesList />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps)(App)