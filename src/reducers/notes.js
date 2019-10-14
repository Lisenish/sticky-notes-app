import { combineReducers } from "redux";
import {
  ADD_NOTE,
  CHANGE_PREVIEW_NOTE,
  CLEAR_PREVIEW_NOTE
} from "../actions/notes";

//todo add separate order field
const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    default:
      return state;
  }
};

const previewNote = (state = { id: -1, isPreview: true }, action) => {
  switch (action.type) {
    case ADD_NOTE:
    case CLEAR_PREVIEW_NOTE:
      return { ...state, text: "" };
    case CHANGE_PREVIEW_NOTE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const getNotesList = state => state.notes;
export const getNotesListWithPreview = state => [
  ...state.notes,
  state.previewNote
];

export default combineReducers({ notes, previewNote });
