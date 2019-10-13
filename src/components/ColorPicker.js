import styled from "@emotion/styled";
import React, { useState } from "react";
import { notesColors } from "../utils/styles";
import { IconButton } from "./Button";
import ColorPanel from "./ColorPanel";
import FloatPanel from "./FloatPanel";
import { ChangeColorIcon } from "./Icon";

const buttonSize = 16;

const ColorPicker = ({ className, selectedColor, onColorSelect }) => {
  const [isPanelShown, setIsPanelShown] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setIsPanelShown(true)}
      onMouseLeave={() => setIsPanelShown(false)}
    >
      <IconButton transparent icon={<ChangeColorIcon />} />

      {isPanelShown && (
        <FloatPanel top={buttonSize}>
          <ColorPanel
            selectedColor={selectedColor}
            colors={notesColors}
            onColorSelect={onColorSelect}
          />
        </FloatPanel>
      )}
    </div>
  );
};

export default styled(ColorPicker)({
  position: "relative",
  width: buttonSize,
  height: buttonSize
});
