import { Note } from "../note";
import { Notes } from "../notes";

export interface IAppStorage {
    //saveNotes(notes: Notes): void;
    saveNote(note: Note): Promise<void>;
    updateNote(note: Note): void;
    loadNote(id: string): Note;
    loadNotes() : Promise<Notes>;
    deleteNote(id: string): void;
}