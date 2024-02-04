import React, { useState } from "react";
import { Filter } from "./Filter";
import { Box } from "../Box";
import { Labels } from "./Labels";
import { Categories } from "./Categories";

const initSections = {
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

const initCategories = {
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
  const [sections, setSections] = useState<Record<string, boolean>>(initSections);
  return (
    <Box ai="flex-start">
      <Box ai="flex-start">
        <Filter list={sections} defaultList={initSections} onChange={(sections) => setSections(sections)} />
    <Box $ai="flex-start">
      <Box $ai="flex-start">
      </Box>
      {Object.keys(sections).map(
        (section) => sections[section] && section !== "Все" && <Categories initState={initCategories[section]} />
      )}
      <Labels />
    </Box>
  );
};
