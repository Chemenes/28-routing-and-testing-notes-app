import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote: PropTypes.func,
  handleDeleteNote: PropTypes.func,
};
