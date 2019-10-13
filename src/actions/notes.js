export const ADD_NOTE = "ADD_NOTE";

let noteId = 0;
export const addNote = (text, authorId, color) => ({
  type: ADD_NOTE,
  payload: {
    id: noteId++,
    text: text,
    authorId: authorId,
    color: color,
    date: new Date()
  }
});
