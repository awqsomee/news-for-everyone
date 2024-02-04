import React from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { BebasNeueRegular } from "../pages/_app";
import { Center } from "../ui/Center";
import { Box } from "./Box";
import { Container } from "./Container";

export const Header = () => {
  return (
    <Layout>
      <Container>
        <Box $fd="row" $jc="space-between">
          <Logo>ВАШ ЛОГОТИП</Logo>
          <Search />
        </Box>
      </Container>
    </Layout>
  );
};

export const HeaderHeigth = "60px";

const Layout = styled.div`
  position: fixed;
  width: 100%;
  height: ${HeaderHeigth};
  background-color: rgba(1, 28, 39, 0.7);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-family: ${BebasNeueRegular.style.fontFamily};
  font-size: 22px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.contrast};
`;
