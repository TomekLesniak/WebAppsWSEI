import { Note } from "../note";
import { Notes } from "../notes";

export interface IAppStorage {
    saveNotes(notes: Note[]): Promise<void>;
    saveNote(note: Note): Promise<void>;
    updateNote(id: string, isPinned: boolean): Promise<void>;
    loadNote(id: string): Promise<Note>;
    loadNotes() : Promise<Notes>;
    deleteNote(id: string): Promise<void>;
}