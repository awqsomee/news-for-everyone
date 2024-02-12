import React from "react";
import styled from "styled-components";

export const Box = styled.div<{
  $fd?: "column" | "row";
  $ai?: "center" | "flex-start";
  $jc?: "center" | "space-between" | "flex-start" | "flex-end";
  p?: string;
  m?: string;
  gap?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: ${({ $fd }) => $fd || "column"};
  align-items: ${({ $ai }) => $ai || "center"};
  justify-content: ${({ $jc }) => $jc || "center"};
  padding: ${({ p }) => p || ""};
  margin: ${({ m }) => m || ""};
  width: 100%;
  height: ${({ height }) => height ?? "100%"};
  gap: ${({ gap }) => gap ?? ""};
`;
