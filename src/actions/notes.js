export const ADD_NOTE = "ADD_NOTE";

export const CLEAR_PREVIEW_NOTE = "CLEAR_PREVIEW_NOTE";
export const CHANGE_PREVIEW_NOTE = "CHANGE_PREVIEW_NOTE";

let noteId = 0;

export const addNote = (text, authorId, color) => ({
  type: ADD_NOTE,
  payload: {
    id: noteId++,
    text,
    authorId,
    color,
    date: new Date()
  }
});

export const clearPreviewNote = () => ({
  type: CLEAR_PREVIEW_NOTE
});

export const changePreviewNote = note => ({
  type: CHANGE_PREVIEW_NOTE,
  payload: note
});
