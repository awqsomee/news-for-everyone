import React, { useState } from "react";
import styled from "styled-components";
import { Toggle } from "../Toggle";

export type FilterType = "main" | "secondary";

export const Filter = ({
  list,
  defaultList,
  onChange,
  type,
}: {
  list: Record<string, boolean>;
  defaultList: Record<string, boolean>;
  onChange: (list: Record<string, boolean>) => void;
  type?: FilterType;
}) => {
  const handleChange = (item: string) => {
    if (item === "Все") return defaultList;
    if (Object.hasOwn(list, "Все")) return { ...list, [item]: !list[item], Все: false };
    return { ...list, [item]: !list[item] };
  };

  return (
    <Layout>
      {Object.keys(list).map((item) => (
        <Toggle
          key={item}
          label={item}
          state={list[item]}
          setState={() => {
            onChange(handleChange(item));
          }}
          type={type}
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
  margin-bottom: 16px;
`;
