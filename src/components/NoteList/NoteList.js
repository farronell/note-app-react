import React from 'react';
import Note from "../Note/Note"
import "./NoteList.css"

function NoteList({ notes, onRemoveNote, onEditNote }) {
    return (
        <div className="noteList">
            <ul>
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        onRemoveNote={onRemoveNote}
                        onEditNote={onEditNote}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NoteList;