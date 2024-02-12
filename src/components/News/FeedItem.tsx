import React from "react";
import { Mood, News } from "./Feed";
import styled from "styled-components";
import { BebasNeueRegular, LatoMedium } from "../../pages/_app";
import { Eye } from "../../icons/Eye";
import { Box } from "../Box";
import { Bookmark } from "../../icons/Bookmark";
import { EyeOff } from "../../icons/EyeOff";
import img from "../../../public/news/images/a1ed88ac4a717812f438be43c6dd03ec.jpg";

export const FeedItem = ({ item }: { item: News }) => {
  const creationDate = Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(new Date(item.creationDate));
  return (
    <Layout>
      <Img src={item.image} />
      <BlackBackground />
      <Info>
        <div>
          <Box height="28px" m="0 0 30px 0" $fd="row" $jc="flex-start" gap="10px">
            {item.categories.map((category) => (
              <Category>{category}</Category>
            ))}
          </Box>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </div>
        <Box height="34px" $fd="row" $jc="space-between">
          <Box $fd="row" gap="10px">
            <DateTime>{creationDate}</DateTime>
            <Views>
              <Eye />
              {item.views.toLocaleString()}
            </Views>
          </Box>
          <Box $jc="flex-end" $fd="row" gap="12px">
            <Bookmark />
            <EyeOff />
          </Box>
        </Box>
      </Info>
      {!!item.label && <Label>{item.label}</Label>}
      <MoodIcon mood={item.mood} />
    </Layout>
  );
};

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  background-color: ${({ theme }) => theme.accent};
  padding: 5px 10px 6px 10px;
  color: ${({ theme }) => theme.contrast};
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
`;

const DateTime = styled.div`
  white-space: nowrap;
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
`;

const BlackBackground = styled.div`
  position: absolute;
  bottom: -138px;
  width: 100%;
  height: 262px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s all;
`;

const Views = styled.div`
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${({ theme }) => theme.grey};
  display: flex;
  gap: 5px;
`;

const Info = styled.div`
  margin: 20px 10px;
  position: absolute;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: -198px;
  transition: 0.5s all;
`;

const Title = styled.h3`
  font-family: ${BebasNeueRegular.style.fontFamily};
  font-style: normal;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.contrast};
  transition: 0.5s all;
`;

const Description = styled.div`
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${({ theme }) => theme.contrast};
`;

const Category = styled.span`
  border-radius: 14px;
  background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.primary};
  padding: 5px 10px 6px 10px;
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
`;

const Layout = styled.div`
  position: relative;
  height: 450px;
  overflow: hidden;

  &:hover ${Title} {
    margin-bottom: 10px;
  }

  &:hover ${BlackBackground} {
    bottom: 0;
  }

  &:hover ${Info} {
    bottom: 0;
  }
`;

const MoodIcon = styled.div<{ mood: Mood }>`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  background-color: ${({ mood, theme }) => {
    switch (mood) {
      case "Хорошее":
        return theme.green;
      case "Плохое":
        return theme.red;
      case "Нейтральное":
        return theme.grey;
    }
  }};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
