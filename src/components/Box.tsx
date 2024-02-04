import React from "react";
import styled from "styled-components";
import { HeaderHeigth } from "./Header";

export const Box = ({ children }: { children: React.ReactNode }) => {
  return <BoxLayout>{children}</BoxLayout>;
};

const BoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - ${HeaderHeigth});
`;
