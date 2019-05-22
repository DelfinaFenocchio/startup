import React, { Component } from 'react'
export default class MovieItem extends Component {
  render() {
    return (
      <li key={this.props.index}>
        <span className="movieElement">{this.props.title}</span>
        <span className="movieElement">{this.props.duration}</span>
        <span className="movieElement">{this.props.year}</span>
        <button type="button" className="edit" onClick={(e) => this.props.onEditMovie(this.props.id)}>Edit</button>
      </li>
    )
  }
}