import styled from "@emotion/styled";
import React from "react";

const FloatPanel = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default styled(FloatPanel)(
  {
    position: "absolute"
  },
  ({ top, left }) => ({ top: top, left: left })
);
