import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";
import Gravatar from "./Gravatar";

const NoteContainer = styled.div(
  {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    width: 220,
    height: 220,
    padding: 12,

    borderRadius: 8,
    border: "1px solid gray",

    ".Note__body": {
      height: "100%",
      fontSize: 18,
      overflow: "scroll",
      wordWrap: "break-word"
    },

    ".Note__footer": {
      marginTop: 12
    },

    ".Note__author": {
      display: "flex",
      alignItems: "center"
    },

    ".Note__author-name": {
      marginLeft: 10
    },

    ".Note__date": {
      fontSize: 10,
      textAlign: "right"
    }
  },
  ({ color }) => ({
    backgroundColor: color || "bisque"
  })
);

const Note = ({ note, className }) => {
  const { text, date, authorId, color } = note;

  return (
    <NoteContainer color={color} className={className}>
      <div className="Note__body">{text}</div>
      <div className="Note__footer">
        <div className="Note__author">
          <Gravatar email={authorId} />
          <span className="Note__author-name">Dmitry Ivanov</span>
        </div>
        <div className="Note__date">{date.toLocaleString()}</div>
      </div>
    </NoteContainer>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date)
  })
};

export default Note;
