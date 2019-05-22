import React, { Component } from 'react'
import MovieItem from './MovieItem'
export default class ListMovies extends Component {
  constructor(props) {
    super(props)
    this.handleSelectMovie = this.handleSelectMovie.bind(this)
  }
  handleSelectMovie(e) {
    this.props.onSelectMovie(e)
  }

  render() {
    return (
      <ul>
        <span className="movieElement">Title</span>
        <span className="movieElement">Duration</span>
        <span className="movieElement">Year</span>
        {this.props.movies.map((movie, index) => {
          return (
            <MovieItem key={index} title={movie.title} duration={movie.duration} year={movie.year}
              onEditMovie={(id) => this.handleSelectMovie(movie.id)} />
          )
        })
        }
      </ul>
    )
  }
}