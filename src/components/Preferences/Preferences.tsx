import React, { useState } from "react";
import { Filter } from "./Filter";
import { Box } from "../Box";
import { Labels } from "./Labels";
import { Categories } from "./Categories";
import styled from "styled-components";

export type Section =
  | "Все"
  | "Политика"
  | "Общество"
  | "Экономика"
  | "Финансы"
  | "Спорт"
  | "Технологии"
  | "Культура"
  | "Наука"
  | "Туризм"
  | "Недвижимость";

const sections: Section[] = [
  "Все",
  "Политика",
  "Общество",
  "Экономика",
  "Финансы",
  "Спорт",
  "Технологии",
  "Культура",
  "Наука",
  "Туризм",
  "Недвижимость",
];

const categories = {
  Политика: {
    Власть: false,
    "Социальная справедливость": false,
    "Международные отношения": false,
    "Мировая экономика": false,
    "Международное право": false,
  },
  Общество: {
    Религия: false,
    Семья: false,
    "Социальная жизнь": false,
    "Социальная культура": false,
    "Социальные сети": false,
  },
  Экономика: {
    Бизнес: false,
    Экономика: false,
    Финансы: false,
    Сырье: false,
    Товары: false,
    Услуги: false,
  },
  Финансы: {
    Бизнес: false,
    Экономика: false,
    Финансы: false,
    Сырье: false,
    Товары: false,
    Услуги: false,
  },
  Спорт: {
    Футбол: false,
    Хоккей: false,
    Баскетбол: false,
    Волейбол: false,
  },
  Технологии: {
    "Искусственный интеллект": false,
    Нанотехнологии: false,
    Игры: false,
    Криптовалюта: false,
    Киберпреступления: false,
  },
  Культура: {
    Театр: false,
    Кино: false,
    Музыка: false,
    Танцы: false,
  },
  Наука: {
    Астрономия: false,
    Биология: false,
    География: false,
    Геология: false,
    История: false,
    Математика: false,
    Физика: false,
    Химия: false,
  },
  Туризм: {
    Авиа: false,
    Авто: false,
    "Городской туризм": false,
    "Пляжный туризм": false,
    Природа: false,
  },
  Недвижимость: {
    Квартиры: false,
    Дома: false,
    "Коммерческая недвижимость": false,
  },
};

export const Preferences = () => {
  const [section, setSection] = useState<Section>("Все");
  return (
    <Box $ai="flex-start">
      <FilterRow>
        <Filter type="array" current={section} filters={sections} setFilter={(section) => setSection(section)} />
        <Labels />
      </FilterRow>
      {section !== "Все" && <Categories initState={categories[section]} />}
    </Box>
  );
};

const FilterRow = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  margin-bottom: 16px;
`;
