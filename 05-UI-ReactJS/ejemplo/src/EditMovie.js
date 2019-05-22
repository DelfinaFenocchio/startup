import React, { Component } from 'react'
export default class EditMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: this.props.movie,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let movie = Object.assign({}, this.state.movie)
    movie[0][e.target.name] = e.target.value
    if (this.props.movie)
      this.setState({ movie });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onEditMovie(this.state.movie)
  }

  render() {
    return (
      <form className="formMovie" onSubmit={(e) => this.handleSubmit(e)}>
        <label>Title</label>
        <input
          className="inputForm"
          type="text"
          name="title"
          defaultValue={this.state.movie[0].title}
          required={true}
          onChange={this.handleChange} />
        <label>Year</label>
        <input
          className="inputForm"
          type='number'
          min='0'
          max='2019'
          name="year"
          defaultValue={this.state.movie[0].year}
          required={true}
          onChange={this.handleChange} />
        <label>Duration</label>
        <input
          className="inputForm"
          type="text"
          name="duration"
          defaultValue={this.state.movie[0].duration}
          required={true}
          onChange={this.handleChange} />
        <input type="submit" value="Edit" className="btn" />
      </form>
    )

  }
}