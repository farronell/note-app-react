import './App.css';
import Header from './Header/Header';
import AddNoteForm from './AddNoteForm/AddNoteForm';
import NoteList from './NoteList/NoteList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([
    {id: uuidv4(), title: "test1", text: "text1"},
    {id: uuidv4(), title: "test1", text: "text1"}
  ])

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }
  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }
  const editNote = (id, updNote) => {
    setNotes(notes.map((note) => (note.id === id ? updNote : note)));
  }

  return (
    <div className="App">
      <Header/>
      <AddNoteForm onAddNote={addNote} />
      <NoteList
        notes={notes}
        onRemoveNote={removeNote}
        onEditNote={editNote}
      />
    </div>
  );
}

export default App;
