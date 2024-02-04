import React from "react";
import styled from "styled-components";

export const Box = styled.div<{ fd?: "column" | "row"; ai?: "center" | "flex-start"; jc?: "center" | "space-between" }>`
  display: flex;
  flex-direction: ${({ fd }) => fd || "column"};
  align-items: ${({ ai }) => ai || "center"};
  justify-content: ${({ jc }) => jc || "center"};
  width: 100%;
  height: 100%;
`;
