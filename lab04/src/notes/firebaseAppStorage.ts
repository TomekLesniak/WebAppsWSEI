import { AppStorage } from "./appStorage";
import { Note } from "./note";
import { Notes } from "./notes";

import firebase from "firebase";
import {firebaseConfig} from "../config";
import { NoteDto } from "../Dtos/noteDto";

export class FirebaseAppStorage implements AppStorage{
    db: firebase.firestore.Firestore;

    constructor(){
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = firebaseApp.firestore();
    }

    async saveNotes(notes: Note[]) : Promise<void> {
        notes.forEach(note => {
            this.saveNote(note);
        });
    }

    async saveNote(note: Note): Promise<void> {
        const noteDto: NoteDto = {
            title: note.title,
            body: note.body,
            color: note.color, 
            dateCreated: note.dateCreated,
            isPinned: note.isPinned
        }
        const res = await this.db.collection('notes').add(noteDto);
        note.id = res.id;        
    }

    async updateNote(id: string, isPinned: boolean): Promise<void> {
        if(id === null) {
            return;
        }

        await this.db.collection('notes').doc(id).update({isPinned: isPinned});
    }

    async loadNote(id: string): Promise<Note> {
        if(String.length === 0) {
            return;
        }

        const response = await this.db.collection('notes').doc(id).get().then(res => {
            return  {id : res.id, note :  res.data() as NoteDto};
        });

        return new Note(response.note.title, response.note.body, response.note.color, response.note.isPinned, response.id);
    }

    async deleteNote(id: string): Promise<void> {
        if(String.length === 0) {
            return;
        }

        await this.db.collection('notes').doc(id).delete();
    }

    async loadNotes(): Promise<Notes> {
        const docs = await this.db.collection('notes').get().then(res => res.docs);
        const notes = docs.map(doc => {
            const data  = doc.data();
            return new Note(data.title, data.body, data.color, data.isPinned, doc.id);
        })
        return new Notes(notes);
    }

}