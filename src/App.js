import "./App.css";
import React from "react";
import { NewNoteForm } from "./NewNoteForm";
import { useNoteStore } from "./NotesContext";
import { useObserver } from "mobx-react";

function App() {
  const notesStore = useNoteStore();

  return useObserver(() => (
    <>
      <ul>
        {notesStore.notes.map((note) => (
          <li onClick={
            () => notesStore.removeNote(note.id)
          } key={note.id}>{note.text}</li>
        ))}
      </ul>
      <NewNoteForm />
    </>
  ));
}

export default App;
