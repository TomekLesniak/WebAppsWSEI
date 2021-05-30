import './main.scss';
import { App } from './app';

import firebase from "firebase";
import {firebaseConfig} from "./config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const note = {
    title: "test"
};

addNote(note);

async function addNote(note:any) {
    const res = await db.collection('notes').add(note);
}

//delete collection.doc(id).delete();
//delete collection.doc(id).update(note);
//doc.get(id).then(res => {id: res.id, res.data})
//db.collections(notes).get().then(res =>{size: res.size, docs: res.docs.map})


const app = new App();