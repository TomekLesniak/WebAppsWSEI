import { Note } from "./note";

export class Notes {
    private allNotes: Note[] = [];

    constructor(notes?: Note[]) {
        if(notes){
            this.allNotes = notes;
        }
    }

    get sortedNotes() {
        const sorted = this.allNotes.sort(note => note.isPinned ? -1 : 1);

        return sorted;
    }

    addNote = (note: Note) => {
        if(note === null || this.allNotes.includes(note)) {
            return false;
        }

        this.allNotes.push(note);
        return true;
    }

    removeNote = (note: Note) => {
        const searchIndex = this.allNotes.indexOf(note);
        if(searchIndex < 0){
            return false;
        }

        this.allNotes.splice(searchIndex, 1);
        return true;
    }

}