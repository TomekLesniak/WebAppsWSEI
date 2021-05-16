import {IAppStorage} from './interfaces/appStorage'
import { Note } from './note';
import { Notes } from './notes';

export class AppStorage implements IAppStorage {
    loadNotes(): Notes {
        throw new Error('Method not implemented.');
    }
    saveNotes(notes: Notes): void {
        throw new Error('Method not implemented.');
    }

}