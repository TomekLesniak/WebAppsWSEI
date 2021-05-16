import { Note } from "./notes/note";
import { Notes } from "./notes/notes";

export class App {
    notes: Notes = new Notes();

    constructor() {
        document.body.querySelector('#addNoteButton').
                    addEventListener('click', () => this.addNote());

    }

    addNote() {
        const titleInput : HTMLInputElement = document.querySelector('#titleInput');
        const bodyInput : HTMLInputElement = document.querySelector('#bodyInput');
        const colorInput : HTMLInputElement = document.querySelector('#colorInput');
        const note = new Note(titleInput.value, bodyInput.value, colorInput.value);
        this.notes.addNote(note);
        this.render();

        
    }

    render() {
        this.notes.sortedNotes.forEach(note => {
        console.log(note);
            const noteContainer = document.querySelector('.notes-container');
        const noteCard = document.createElement('div');
        const noteTitle = document.createElement('h4');
        noteTitle.textContent = note.title;
        noteCard.appendChild(noteTitle);
        
        const temp = document.createElement('span');
        temp.innerText = `Description: ${note.body}`; 
        noteCard.appendChild(temp);

        // const country = document.createElement('span');
        // country.innerText = `Country: ${weatherInfo.sys.country}`; 
        // noteCard.appendChild(country);

        // const description = document.createElement('span');
        // description.innerText = `Description: ${weatherInfo.weather[0].description}`; 
        // noteCard.appendChild(description);

        noteCard.className = 'note-card';
        noteCard.style.background = note.color;
        noteContainer.append(noteCard);
        })
        
    }

    createNoteCard(note: Note){
        
    }



    saveData(data: any){
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if(data){
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}


class Weather {
    city: string;
    temp: string;
    description: string;
    country: string;
}