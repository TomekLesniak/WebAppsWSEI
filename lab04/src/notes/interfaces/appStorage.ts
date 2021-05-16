import { Note } from "../note";
import { Notes } from "../notes";

export interface IAppStorage {
    loadNotes() : Notes;
    saveNotes(notes: Notes): void;
}