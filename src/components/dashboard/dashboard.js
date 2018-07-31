import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import NoteItem from '../note-item/note-item';
import { renderIf } from '../../lib/utils';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: [],
      error: null,
    };
  }

  handleAddNote = (note) => {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();
    note._id = uuid();
    return this.setState((previousState) => {
      return {
        note: [...previousState.note, note], 
        error: null,
      };
    });
  }

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => {
      return {
        note: previousState.note.filter(note => note._id !== noteToRemove._id),
      };
    });
  }

  handleUpdateNote = (noteToUpdate) => {
    return this.setState((previousState) => {
      return {
        note: previousState.note.map(note => (note._id === noteToUpdate._id ? noteToUpdate : note)),
      };
    });
  }

  handleTotalPrice = () => {
    return this.state.note.reduce((sum, note) => {
      return sum + Number(note.price); 
    }, 0);
  }

  handleNotesList = () => {
    return (
      <ul>
        {
          this.state.note.map((note) => {
            return (
              <li key={note._id}>
                <NoteItem
                  note={note}
                  handleRemoveNote={this.handleRemoveNote}
                  handleUpdateNote={this.handleUpdateNote}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="dashboard">
        <NoteForm handleComplete={this.handleAddNote} />
        {
          renderIf(this.state.error, <h2 className="error">You must enter a title.</h2>)
        }
        {this.handleNotesList()}
        <p>Your total costs are: ${this.handleTotalPrice()}</p>
      </section>
    );
  }
}
