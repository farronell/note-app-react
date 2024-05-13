import "./AddNoteForm.css"
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddNoteForm({ onAddNote }) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || text.trim() === '') {
            alert('Please enter both title and text.');
            return;
        }
        const newNote = {
            id: uuidv4(),
            title,
            text,
        }
        onAddNote(newNote);
        setTitle("")
        setText("")
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="noteForm">
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type="submit">Add Note</button>
                </div>
            </form>
        </>
    )
}

export default AddNoteForm;