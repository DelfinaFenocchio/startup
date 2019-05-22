import React, { Component } from 'react'
import MovieItem from './MovieItem'
import { connect } from 'react-redux'
class MoviesList extends Component {
  render() {
    return (
      <ul>
        <span className="movieElement">Title</span>
        <span className="movieElement">Duration</span>
        <span className="movieElement">Year</span>
        {this.props.movies.map((movie, index) => {
          return (
            <MovieItem key={index}
              id={movie.id}
              title={movie.title}
              duration={movie.duration}
              year={movie.year}
            />
          )
        })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps)(MoviesList)