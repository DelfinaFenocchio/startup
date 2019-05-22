import React, { Component } from 'react'
import Form from './Form'
import { v4 } from 'uuid';

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
  render() {
    return (
      <div className="container">
        <h1>Create movie</h1>
        <Form onAddMovie={(title, year, duration) =>
          this.handleAddMovie(title, year, duration)} />
        
      </div>
    )
  }
}