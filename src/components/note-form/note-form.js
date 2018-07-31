import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  price: 0,
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note ? props.note : defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // this bracket notation denotes a computed value or a dynamic property name
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update Note' : 'Create Note';
    return (
      <form onSubmit={this.handleSubmit} data-cy="note-form">
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
          data-cy="title"
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange}
          data-cy="price"
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleComplete: PropTypes.func,
  handleRemoveNote: PropTypes.func,
  note: PropTypes.object,
 
};
