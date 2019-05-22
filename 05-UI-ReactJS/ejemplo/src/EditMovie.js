import React, { Component } from 'react'
import { editMovie } from './Actions.js'
import { connect } from 'react-redux'
class EditMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.movie.id,
      title: this.props.movie.title,
      duration: this.props.movie.duration,
      year: this.props.movie.year
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEditMovie = this.handleEditMovie.bind(this)
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleEditMovie(e) {
    e.preventDefault()
    this.props.editMovie(this.state)
  }

  render() {
    const { title, duration, year } = this.state
    return (
      <form className="formMovie" onSubmit={this.handleEditMovie}>
        <label>Title</label>
        <input
          className="inputForm"
          type="text"
          name="title"
          defaultValue={title}
          required={true}
          onChange={this.handleChange} />
        <label>Year</label>
        <input
          className="inputForm"
          type='number'
          min='0'
          max='2019'
          name="year"
          defaultValue={year}
          required={true}
          onChange={this.handleChange} />
        <label>Duration</label>
        <input
          className="inputForm"
          type="text"
          name="duration"
          defaultValue={duration}
          required={true}
          onChange={this.handleChange} />
        <input type="submit" value="Edit" className="btn" />
      </form>
    )

  }
}

const mapDispatchToProps = (dispatch) => ({
  editMovie: (movie) => dispatch(editMovie(movie))
});

export default connect(null, mapDispatchToProps)(EditMovie)