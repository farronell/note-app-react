import './App.css';
import Header from './Header/Header';
import AddNoteForm from './AddNoteForm/AddNoteForm';
import NoteList from './NoteList/NoteList';
import NotesData from './NotesData';
import NotesReducer from './NotesReducer';
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, dispatch] = useReducer(NotesReducer, NotesData)
  const addNote = ({ title, text }) => {
    dispatch({
      type: "added",
      id: uuidv4(),
      title: title,
      text: text
    })
  }
  const removeNote = (id) => {
    dispatch({
      type: "del",
      id: id
    })
  }
  const editNote = (id, { title, text }) => {
    dispatch({
      type: "changed",
      id: id,
      note: {
        id: id,
        title: title,
        text: text
      }
    });
  };

  return (
    <div className="App">
      <Header />
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
