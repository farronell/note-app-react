import React, { useState } from 'react';
import EditNoteForm from "../EditNoteForm/EditNoteForm";
import "./Note.css"

function Note({ note, onRemoveNote, onEditNote }) {
    const [isEditing, setIsEditing] = useState(false)
    const handleEdit = () => {
        setIsEditing(true)
    }
    const handleSave = (updNote) => {
        onEditNote(note.id, updNote)
        setIsEditing(false)
    }
    return (
        <>
            <li key={note.id}>
                {isEditing ?
                    (
                        <EditNoteForm
                            note={note}
                            onSaveNote={handleSave}
                        />
                    ) :
                    (<div className="noteItem">
                        <h3>{note.title}</h3>
                        <p>{note.text}</p>
                        <button onClick={() => onRemoveNote(note.id)}>Remove</button>
                        <button onClick={handleEdit}>Edit</button>
                    </div>)
                }
            </li>
        </>
    )
}

export default Note;