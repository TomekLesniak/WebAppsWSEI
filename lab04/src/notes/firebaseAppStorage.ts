import { AppStorage } from "./appStorage";
import { Note } from "./note";
import { Notes } from "./notes";


import firebase from "firebase";
import {firebaseConfig} from "../config";
import { NoteDto } from "../Dtos/noteDto";




// async function addNote(note:any) {
//     const res = await db.collection('notes').add(note);
// }

//delete collection.doc(id).delete();
//delete collection.doc(id).update(note);
//doc.get(id).then(res => {id: res.id, res.data})
//db.collections(notes).get().then(res =>{size: res.size, docs: res.docs.map})

interface LoadNotesResponse{ 
    title: string;
    content: string;
    color?: string;

}

export class FirebaseAppStorage implements AppStorage{

    db: firebase.firestore.Firestore;

    constructor(){
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = firebaseApp.firestore();
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
        console.log(res);
    }
    updateNote(note: Note): void {
        console.log("update")
    }
    loadNote(id: string): Note {
        console.log("load1")
        return null;
    }
    deleteNote(id: string): void {
        console.log("delete")
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