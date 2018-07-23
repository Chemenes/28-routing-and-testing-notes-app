import React from 'react';
import uuid from 'uuid/v4';
import NoteCreateForm from '../note-create-form/note-create-form';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
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
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note._id !== noteToRemove._id),
      };
    });
  }

 
  handleNotesList = () => {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note._id}>
                {note.title} : ${note.price}
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
        <NoteCreateForm handleAddNote={this.handleAddNote} />
        {
          this.state.error && <h2 className="error">You must enter a title.</h2>
        }
        {this.handleNotesList()}
        
      </section>
    );
  }
}
