import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeMovie } from './Actions.js'
import EditMovie from './EditMovie.js'
class MovieItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEditForm: false
    }
    this.handleSelectMovie = this.handleSelectMovie.bind(this)
    this.handleRemoveMovie = this.handleRemoveMovie.bind(this)
  }
  handleSelectMovie() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }
  handleRemoveMovie() {
    this.props.removeMovie(this.props.id)
  }
  render() {
    return (
      <li key={this.props.index}>
        <span className="movieElement">{this.props.title}</span>
        <span className="movieElement">{this.props.duration}</span>
        <span className="movieElement">{this.props.year}</span>
        <button type="button" className="edit" onClick={this.handleSelectMovie}>Edit</button>
        <button type="button" className="delete" onClick={this.handleRemoveMovie}>Delete</button>
        {this.state.showEditForm && <EditMovie movie={this.props} />}
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeMovie: (id) => dispatch(removeMovie(id))
});

export default connect(null, mapDispatchToProps)(MovieItem)