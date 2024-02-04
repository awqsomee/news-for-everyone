import React from "react";
import styled from "styled-components";
import { HeaderHeigth } from "./Header";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - ${HeaderHeigth});
`;
