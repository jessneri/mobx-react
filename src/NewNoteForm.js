import React, { useState } from 'react';
import { useNoteStore } from './NotesContext'

export const NewNoteForm = () => {
    const [noteText, setNoteText] = useState("");
    const noteStore = useNoteStore();

    return <>
        <input value={noteText}  onChange={(e) => setNoteText(e.target.value)} type="text"/>
        <button onClick={
            () => noteStore.addNotes(noteText)
        }>Add note</button>
    </>
}