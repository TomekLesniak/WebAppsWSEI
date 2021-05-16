import { Note } from "./note";

export class Notes {
    private allNotes: Note[] = [];

    constructor(notes?: Note[]) {
        if(notes){
            this.allNotes = notes;
        }
    }

    private get pinnedNotes() {
        return this.allNotes.filter((note) => {
            note.isPinned === true;
        })
    }

    get sortedNotes() {
        const remainingNotes = this.allNotes.filter(note => {
            note.isPinned === false;
        })

        return [...this.pinnedNotes, ...remainingNotes];
    }

    addNote = (note: Note) => {
        this.allNotes.push(note);
    }

    removeNote = (note: Note) => {
        const searchIndex = this.allNotes.indexOf(note);
        this.allNotes.splice(searchIndex, 1);
    }

}