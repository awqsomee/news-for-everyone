import React from "react";
import styled from "styled-components";
import { FeedItem } from "./FeedItem";
import image1 from "../../../public/news/images/a1ed88ac4a717812f438be43c6dd03ec.jpg";

type Label = "новое";
export type Mood = "Хорошее" | "Плохое" | "Нейтральное";
type Category = "Политика" | "Экономика" | "Спорт";

export type News = {
  title: string;
  description: string;
  image: string;
  label?: Label;
  mood: Mood;
  views: number;
  categories: Category[];
  creationDate: string;
  saved: boolean;
  hidden: boolean;
};

export const Feed = () => {
  const news: News[] = [
    {
      title: "Жара уничтожает мировую экономику",
      description: "Как высокие температуры лишают человечество триллионов долларов и меняют планету?",
      categories: ["Экономика"],
      creationDate: "2023-08-08T14:38:00.000Z",
      saved: false,
      hidden: false,
      image: image1.src,
      mood: "Хорошее",
      views: 132222,
      label: "новое",
    },
    {
      title: "Жара уничтожает мировую экономику",
      description: "Как высокие температуры лишают человечество триллионов долларов и меняют планету?",
      categories: ["Экономика"],
      creationDate: "2023-08-08T14:38:00.000Z",
      saved: false,
      hidden: false,
      image: image1.src,
      mood: "Хорошее",
      views: 132222,
      label: "новое",
    },
    {
      title: "Жара уничтожает мировую экономику",
      description: "Как высокие температуры лишают человечество триллионов долларов и меняют планету?",
      categories: ["Экономика"],
      creationDate: "2023-08-08T14:38:00.000Z",
      saved: false,
      hidden: false,
      image: image1.src,
      mood: "Хорошее",
      views: 132222,
      label: "новое",
    },
    {
      title: "Жара уничтожает мировую экономику",
      description: "Как высокие температуры лишают человечество триллионов долларов и меняют планету?",
      categories: ["Экономика"],
      creationDate: "2023-08-08T14:38:00.000Z",
      saved: false,
      hidden: false,
      image: image1.src,
      mood: "Хорошее",
      views: 132222,
      label: "новое",
    },
  ];
  return (
    <Layout>
      {news.map((item) => (
        <FeedItem item={item} />
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  height: 1410px;
`;
