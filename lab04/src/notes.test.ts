import { Note } from "./notes/note";
import { Notes } from "./notes/notes";

describe('notes', () => {
    let notes: Notes;

    beforeAll(() => {
        notes = new Notes();
    })

    it('addNote_validNote_returnsTrue', () => {
        const note = new Note("title", "body", "red");
        expect(notes.addNote(note)).toBe(true);
    }),

    it('addNote_inValidNote_returnsFalse', () => {
        expect(notes.addNote(null)).toBe(false);
    }),

    it('addNote_alreadyContainsNote_returnsFalse', () => {
        const note = new Note("title", "body", "red");
        notes.addNote(note);

        expect(notes.addNote(note)).toBe(false);
    }),

    it('removeNote_doesContainNote_returnsTrue', () => {
        const note = new Note("title", "body", "red");
        notes.addNote(note);

        expect(notes.removeNote(note)).toBe(true);
    }),

    it('removeNote_inValidNote_returnsFalse', () => {
        expect(notes.removeNote(null)).toBe(false);
    }),

    it('removeNote_doesNotContaintNote_returnsFalse', () => {
        const note = new Note("title", "body", "red")
        expect(notes.removeNote(note)).toBe(false);
    })
})