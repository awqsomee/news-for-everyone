import React from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { BebasNeueRegular } from "../pages/_app";

export const Header = () => {
  return (
    <Layout>
      <Logo>ВАШ ЛОГОТИП</Logo>
      <Search />
        <Box $fd="row" $jc="space-between">
    </Layout>
  );
};

export const HeaderHeigth = "60px";

const Layout = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: ${HeaderHeigth};
  padding: 0 264px;
  background-color: rgba(1, 28, 39, 0.7);
  z-index: 10;
`;

const Logo = styled.div`
  font-family: ${BebasNeueRegular.style.fontFamily};
  font-size: 22px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.contrast};
`;
