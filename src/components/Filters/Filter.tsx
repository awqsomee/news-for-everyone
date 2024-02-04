import React, { useState } from "react";
import styled from "styled-components";
import { Toggle } from "../Toggle";

export const Filter = () => {
  const init = {
    Все: true,
    Политика: false,
    Общество: false,
    Экономика: false,
    Финансы: false,
    Спорт: false,
    Технологии: false,
    Культура: false,
    Наука: false,
    Туризм: false,
    Недвижимость: false,
  };
  const [sections, setSections] = useState(init);

  const handleFilters = () => {};

  return (
    <Layout>
      {Object.keys(sections).map((section) => (
        <Toggle
          key={section}
          label={section}
          state={sections[section]}
          setState={() => {
            setSections((prev) => {
              if (section === "Все") return init;
              return { ...prev, [section]: !prev[section], Все: false };
            });
          }}
        />
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 43px;
`;
