import React from 'react';
import { createNotesStore } from './NotesStore'
import { useLocalStore } from 'mobx-react'

const NotesContext = React.createContext(null);

export const NotesProvider = ({ children }) => {
    const NotesStore = useLocalStore(createNotesStore);

    return <NotesContext.Provider value={NotesStore}>;
        {children}
    </NotesContext.Provider>
}

export const useNoteStore = () => React.useContext(NotesContext)