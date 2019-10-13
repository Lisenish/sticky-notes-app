import styled from "@emotion/styled";
import React from "react";

const buttonSize = 16;

const Button = styled.button(
  {
    width: buttonSize,
    height: buttonSize,
    padding: 0,
    cursor: "pointer",
    border: "none",

    "&:focus": {
      outline: "none"
    }
  },
  ({ transparent }) => ({
    opacity: transparent && 0.5,

    "&:hover": {
      opacity: transparent && 1
    }
  })
);

export const IconButton = ({ icon, ...restProps }) => (
  <Button {...restProps}>{icon}</Button>
);

export default Button;
