import React from "react";
import styled from "styled-components";
import bannerCover from "/public/images/bannerCover.png";
import { BebasNeueRegular, LatoSemiBold } from "../../pages/_app";
import { Container } from "../Container";

export const Banner = () => {
  return (
    <Layout>
      <Cover />
      <Container>
        <Grid>
          <Title>
            Новости
            <br />
            для каждого
          </Title>
          <SubTitle>
            Сохраняйте хорошее настроение с утра: о плохом можно читать позже.
            <br />
            Мы помечаем новости, чтобы помочь вам в этом
          </SubTitle>
        </Grid>
      </Container>
    </Layout>
  );
};

const bannerHeight = "588px";

const Layout = styled.div`
  position: relative;
  height: ${bannerHeight};
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Cover = styled.div`
  position: absolute;
  width: 100vw;
  height: ${bannerHeight};
  color: rgba(113, 79, 207, 0.3);
  background-image: url(${bannerCover.src});
  background-size: cover;
`;

const Title = styled.h1`
  position: relative;
  font-family: ${BebasNeueRegular.style.fontFamily};
  font-weight: 400;
  font-size: 158px;
  line-height: 158px;
  width: 876px;
  top: 150px;
  left: 0;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.h2`
  font-family: ${LatoSemiBold.style.fontFamily};
  position: relative;
  grid-column: 10/13;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  top: 410px;
  height: 100px;
  right: 0;
  color: ${({ theme }) => theme.primary};
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 94px);
  grid-column-gap: 24px;
`;
