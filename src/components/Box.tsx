import React from "react";
import styled from "styled-components";

export const Box = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
