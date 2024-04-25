import React, { useState } from 'react';
import "./EditNoteForm.css"

function EditNoteForm({ note, onSaveNote }) {
    const [title, setTitle] = useState(note.title)
    const [text, setText] = useState(note.text)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveNote({
            ...note,
            title,
            text
        })
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="editForm">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Save</button>
            </div>

        </form>
    )
}

export default EditNoteForm;