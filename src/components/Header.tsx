import React from "react";
import styled from "styled-components";
import { Search } from "./Search";

export const Header = () => {
  return (
    <BoxLayout>
      <Logo>ВАШ ЛОГОТИП</Logo>
      <Search />
    </BoxLayout>
  );
};

export const HeaderHeigth = "60px";

const BoxLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: ${HeaderHeigth};
  padding: 0 264px;
  background-color: rgba(1, 28, 39, 0.7);
`;

const Logo = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 22px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.contrast};
`;
