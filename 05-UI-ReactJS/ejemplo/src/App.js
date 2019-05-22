import React, { Component } from 'react'
import Form from './Form'
import { v4 } from 'uuid';
import MoviesList from './MoviesList'
import EditMovie from './EditMovie'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        { id: v4(), duration: '02:30', title: "Terminator", year: "1996" }
      ],
      showEditForm: false,
      movie: null
    }
    this.handleAddMovie = this.handleAddMovie.bind(this)
    this.handleEditMovie = this.handleEditMovie.bind(this)
    this.handleSelectMovie = this.handleSelectMovie.bind(this)
  }
  handleAddMovie(title, year, duration) {
    const movie = {
      id: v4(),
      duration: duration,
      title: title,
      year: year
    }
    this.setState({ movies: [...this.state.movies, movie] })
  }
  handleSelectMovie(id) {
    this.setState({
      showEditForm: true
    });
    let data = this.state.movies.filter(movie => movie.id === id)
    this.setState({ movie: data })
  }

  handleEditMovie(movie) {
    let moviesList = this.state.movies
    moviesList.forEach((data, i) => {
      if (data.id === movie.id) {
        moviesList[i] = movie
      }
    })
    this.setState({
      movies: moviesList,
      showEditForm: false
    })
  }
  render() {
    return (
      <div className="container">
        <h1>Create movie</h1>
        <Form onAddMovie={(title, year, duration) =>
          this.handleAddMovie(title, year, duration)} />
        <h1>Movies List</h1>
        <MoviesList movies={this.state.movies}
          onSelectMovie={(id) => this.handleSelectMovie(id)} />
        <h1>Edit movie</h1>
        {this.state.showEditForm && <EditMovie movie={this.state.movie}
          onEditMovie={(movie) => this.handleEditMovie(movie)}/>}
      </div>
    )
  }
}