import styled from "@emotion/styled";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../actions/notes";
import { defaultNoteColor } from "../utils/styles";
import ColorPicker from "./ColorPicker";
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

  ".input-container__color-picker": {
    position: "absolute",
    right: 16
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

  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleKeyDown = e => {
    switch (e.key) {
      case "Enter":
        const text = e.target.value;

        dispatch(addNote(text, "liseniss@gmail.com", selectedColor)); //TODO: temporary hardcoded user
        e.target.value = "";
        break;
      case "Escape":
        e.target.value = "";
        break;
      default:
        break;
    }
  };

  const handleColorSelect = color => {
    console.log(color);
    setSelectedColor(color);
  };

  return (
    <div>
      <InputContainer>
        <NoteInput placeholder="Take a Note ↵" onKeyDown={handleKeyDown} />
        <ColorPicker
          className="input-container__color-picker"
          selectedColor={selectedColor}
          onColorSelect={handleColorSelect}
        ></ColorPicker>
      </InputContainer>
      <NotesContainer>
        {notes.map(note => (
          <ChildNote key={note.id} note={note} />
        ))}
      </NotesContainer>
      Notes count: {notes.length}
    </div>
  );
};

export default NotesBoard;
