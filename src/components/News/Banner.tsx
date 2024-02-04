import React from "react";
import styled from "styled-components";
import bannerCover from "/public/images/bannerCover.png";
import { BebasNeueRegular } from "../../pages/_app";

export const Banner = () => {
  return (
    <Layout>
      <Cover />
      <Title>Новости для каждого</Title>
      <SubTitle>
        Сохраняйте хорошее настроение с утра: о плохом можно читать позже. Мы помечаем новости, чтобы помочь вам в этом
      </SubTitle>
    </Layout>
  );
};

const bannerHeight = "588px";

const Layout = styled.div`
  position: relative;
  height: ${bannerHeight};
  width: 100vw;
  padding: 0 264px;
`;

const Cover = styled.div`
  position: absolute;
  left: 0;
  width: 1920px;
  height: ${bannerHeight};
  color: rgba(113, 79, 207, 0.3);
  background-image: url(${bannerCover.src});
  background-size: contain;
`;

const Title = styled.div`
  position: absolute;
  font-family: ${BebasNeueRegular.style.fontFamily};
  font-weight: 400;
  font-size: 158px;
  line-height: 190px;
  width: 876px;
  top: 150px;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  position: absolute;
  width: 302px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  top: 410px;
  right: calc(264px + 27px);
  color: ${({ theme }) => theme.primary};
`;
