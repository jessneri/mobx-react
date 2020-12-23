import { nanoid } from 'nanoid';

export function createNotesStore() {
    return {
        notes: [],
        addNotes(text){
            this.notes.push({
                text, id: nanoid()
            })
        },

        removeNote(id){
            this.notes = this.notes.filter(note => note.id !== id)
        }

    };
};