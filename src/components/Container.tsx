import React from "react";
import styled from "styled-components";
import { HeaderHeigth } from "./Header";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 0 264px;
  height: calc(100vh - ${HeaderHeigth});
`;
