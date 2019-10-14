import * as fromNotes from "../reducers/notes";

export const getNotes = state => state.notes;
export const getNotesList = (state, isPreview) =>
  isPreview
    ? fromNotes.getNotesListWithPreview(getNotes(state))
    : fromNotes.getNotesList(getNotes(state));
