import styled from "@emotion/styled";
import React from "react";

//TODO move to buttons
const ColorButton = styled.button(
  {
    width: 20,
    height: 20,
    borderRadius: "50%",
    cursor: "pointer",
    "&:focus": {
      outline: "none"
    }
  },
  ({ color }) => ({ backgroundColor: color }),
  ({ selected }) => ({ border: selected && "2px solid black" })
);

const Container = styled.div({
  width: 75,
  background: "white",
  boxShadow: "0px 3px 6px lightgrey",
  padding: "0px 8px 5px 0px",

  ".color-panel__button": {
    marginLeft: 5,
    marginTop: 5
  }
});

const ColorPanel = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <Container>
      {colors.map(color => (
        <ColorButton
          className="color-panel__button"
          key={color}
          color={color}
          selected={color === selectedColor}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </Container>
  );
};

export default ColorPanel;
