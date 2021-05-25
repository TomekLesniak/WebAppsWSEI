import {IAppStorage} from './interfaces/appStorage'
import { Note } from './note';
import { Notes } from './notes';

export class AppStorage implements IAppStorage {
    loadNotes(): Notes {
        const data = localStorage.getItem('notes');
        if(data){
            const notes = JSON.parse(data);
            const output = new Notes(notes);
            return output;
        } else {
            return new Notes();
        }
    }
    saveNotes(notes: Notes): void {

        if(localStorage.getItem('notes') !== null){
            this.clear();
        }
        localStorage.setItem('notes', JSON.stringify(notes.sortedNotes));
    }

    clear(): void {
        localStorage.removeItem('notes');
    }

}