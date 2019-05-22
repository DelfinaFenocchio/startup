import React, { Component } from 'react'
export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      duration: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddMovie(this.state.title, this.state.year, this.state.duration);
    this.setState({
      title: '',
      year: '',
      duration: ''
    })
  }
  render() {
    const { title, year, duration } = this.state
    return (
      <form className="formMovie" onSubmit={(e) => this.handleSubmit(e)}>
        <label>Title</label>
        <input
          className="inputForm"
          type="text"
          name="title"
          value={title}
          required={true}
          onChange={this.handleChange} />
        <label>Year</label>
        <input
          className="inputForm"
          name="year"
          value={year}
          type='number'
          min='0'
          max='2019'
          required={true}
          onChange={this.handleChange} />
        <label>Duration</label>
        <input
          className="inputForm"
          type="text"
          name="duration"
          value={duration}
          required={true}
          onChange={this.handleChange} />
        <input type="submit" value="Submit" className="btn" />
      </form>
    )
  }
}
