import {IAppStorage} from './interfaces/appStorage'
import { Note } from './note';
import { Notes } from './notes';



export class AppStorage implements IAppStorage {
    saveNote(note: Note): Promise<void> {
        throw new Error('Method not implemented.');
    }
    updateNote(note: Note): void {
        throw new Error('Method not implemented.');
    }
    loadNote(id: string): Note {
        throw new Error('Method not implemented.');
    }
    deleteNote(id: string): void {
        throw new Error('Method not implemented.');
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