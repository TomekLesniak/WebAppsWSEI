import { AppStorage } from "./notes/appStorage";
import { Note } from "./notes/note";
import { Notes } from "./notes/notes";

export class App {
    notes: Notes = new Notes();
    appStorage: AppStorage = new AppStorage();

    constructor() {
        document.body.querySelector('#addNoteButton').
                    addEventListener('click', () => this.addNote());

        this.notes = this.appStorage.loadNotes();
        this.render();
    }

    addNote() {
        const titleInput : HTMLInputElement = document.querySelector('#titleInput');
        const bodyInput : HTMLInputElement = document.querySelector('#bodyInput');
        const colorInput : HTMLInputElement = document.querySelector('#colorInput');
        const note = new Note(titleInput.value, bodyInput.value, colorInput.value);

        this.notes.addNote(note);
        this.render();

        this.appStorage.saveNotes(this.notes);
    }

    render() {
        const noteContainer = document.querySelector('.notes-container');
        noteContainer.innerHTML = ""; //re-renders

        this.notes.sortedNotes.forEach(note => {
        const noteCard = document.createElement('div');
        const noteTitle = document.createElement('h4');
        noteTitle.textContent = note.title;
        noteCard.appendChild(noteTitle);
        
        const temp = document.createElement('span');
        temp.innerText = `Description: ${note.body}`; 
        noteCard.appendChild(temp);

        noteCard.className = 'note-card';
        noteCard.style.background = note.color;

        var deleteBox = document.createElement('div');
        deleteBox.textContent = 'X';
        deleteBox.className = 'remove-box';
        let toBeRemoved = false;
        deleteBox.addEventListener('click', () => {
            toBeRemoved = true;
        })
        noteCard.appendChild(deleteBox);

        if(note.isPinned) {
            noteCard.classList.toggle('pinned')
        }

        //events
        noteCard.addEventListener('click', () => {
            this.notes.removeNote(note);
            if(toBeRemoved === false) {
                note.isPinned = !note.isPinned;
                this.notes.addNote(note);
            }

           this.appStorage.saveNotes(this.notes);
           this.render();
        })

        noteContainer.append(noteCard);
        })

        
    }
}