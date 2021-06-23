import {IAppStorage} from './interfaces/appStorage'
import { Note } from './note';
import { Notes } from './notes';



export class AppStorage implements IAppStorage {
    async saveNote(note: Note): Promise<void> {
        const notes = await this.loadNotes();
        localStorage.removeItem('notes');
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    async updateNote(id: string, isPinned: boolean): Promise<void> {
        const updateNote = await this.loadNote(id);
        updateNote.isPinned = isPinned;
    }

    async loadNote(id: string): Promise<Note> {
        const notes =  await this.loadNotes();
        return Promise.resolve(notes.sortedNotes.find(x => x.id == id));
    }

    async deleteNote(id: string): Promise<void> {
        const notes = await this.loadNotes();
        const notesWithoutRemoved = notes.sortedNotes.filter(x => x.id !== id);

        localStorage.removeItem('notes');
        localStorage.setItem('notes', JSON.stringify(notesWithoutRemoved));
    }

    loadNotes(): Promise<Notes> {
        const data = localStorage.getItem('notes');
        if(data){
            const notes = JSON.parse(data);
            const output = new Notes(notes);
            return Promise.resolve(output);
        } else {
            return Promise.resolve(new Notes());
        }
    }
}