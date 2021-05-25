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
        this.allNotes.push(note);
    }

    removeNote = (note: Note) => {
        const searchIndex = this.allNotes.indexOf(note);
        this.allNotes.splice(searchIndex, 1);
    }

}