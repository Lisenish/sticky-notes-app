import styled from "@emotion/styled";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, changePreviewNote } from "../actions/notes";
import * as fromUsers from "../reducers/users";
import { getNotesList } from "../selectors/notes";
import { defaultNoteColor } from "../utils/styles";
import { IconButton } from "./Button";
import ColorPicker from "./ColorPicker";
import { PreviewIcon } from "./Icon";
import Note from "./Note";

const NotesContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start"
});

const ChildNote = styled(Note)({
  marginTop: 10,
  marginLeft: 10
});

const InputContainer = styled.div({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: "80%",
  margin: "14px auto",

  ".input-container__buttons": {
    display: "flex",
    position: "absolute",
    right: 10
  },

  ".input-container__button + .input-container__button": {
    marginLeft: 10
  }
});

const NoteInput = styled.input({
  boxSizing: "border-box",
  width: "100%",
  height: 32,
  fontSize: 14
});

const NotesBoard = () => {
  const [selectedColor, setSelectedColor] = useState(defaultNoteColor);
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(false);

  const notes = useSelector(state => getNotesList(state, isPreviewEnabled));

  const users = useSelector(state => state.users);
  const currentUserId = fromUsers.getUserById(users, 0).id; //TODO: solution without authentication

  const dispatch = useDispatch();

  return (
    <>
      <InputContainer>
        <NoteInput
          placeholder="Take a Note ↵"
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
        <div className="input-container__buttons">
          <ColorPicker
            className="input-container__button"
            selectedColor={selectedColor}
            onColorSelect={handleColorSelect}
          ></ColorPicker>
          <IconButton
            transparent={!isPreviewEnabled}
            className="input-container__button"
            title="Enable Preview"
            icon={<PreviewIcon />}
            onClick={handlePreviewClick}
          />
        </div>
      </InputContainer>
      <NotesContainer>
        {notes.map(note => (
          <ChildNote
            key={note.id}
            author={fromUsers.getUserById(users, note.authorId)}
            note={note}
          />
        ))}
      </NotesContainer>
    </>
  );

  function handleColorSelect(color) {
    setSelectedColor(color);
    dispatch(changePreviewNote({ color }));
  }

  function handleTextChange(e) {
    const inputText = e.target.value;

    dispatch(changePreviewNote({ text: inputText }));
  }

  function handleKeyDown(e) {
    const inputText = e.target.value;

    switch (e.key) {
      case "Enter":
        dispatch(addNote(inputText, currentUserId, selectedColor));
        e.target.value = "";
        break;
      case "Escape":
        e.target.value = "";
        dispatch(changePreviewNote({ text: "" }));
        break;
      default:
        break;
    }
  }

  function handlePreviewClick() {
    setIsPreviewEnabled(!isPreviewEnabled);
    dispatch(changePreviewNote({ authorId: currentUserId, date: new Date() }));
  }
};

export default NotesBoard;
