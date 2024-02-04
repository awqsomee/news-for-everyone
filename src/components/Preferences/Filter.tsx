import React, { useState } from "react";
import styled from "styled-components";
import { Toggle } from "../Toggle";
import { Section } from "./Preferences";

export type FilterType = "main" | "secondary";

export const Filter = (
  props:
    | {
        type: "array";
        current: Section;
        filters: Section[];
        setFilter: (section: Section) => void;
      }
    | {
        type: "object";
        list: Record<string, boolean>;
        defaultList: Record<string, boolean>;
        setFilter: (section: Record<string, boolean>) => void;
      }
) => {
  if (props.type === "array")
    return (
      <Layout>
        {props.filters.map((item: Section) => (
          <Toggle
            key={item}
            label={item}
            state={item === props.current}
            setState={() => {
              props.setFilter(item);
            }}
            type="main"
          />
        ))}
      </Layout>
    );

  if (props.type === "object") {
    const list = props.list;
    const handleChange = (item: string) => {
      if (item === "Все") {
        if (Object.keys(list).every((item) => list[item] === props.defaultList[item])) {
          const tempList = { ...props.defaultList };
          Object.keys(props.defaultList).forEach((item) => (tempList[item] = true));
          return tempList;
        }
        return props.defaultList;
      }
      if (Object.hasOwn(list, "Все")) return { ...list, [item]: !list[item], Все: false };
      return { ...list, [item]: !list[item] };
    };
    return (
      <Layout>
        {Object.keys(props.defaultList).map((item: Section) => (
          <Toggle
            key={item}
            label={item}
            state={list[item]}
            setState={() => {
              props.setFilter(handleChange(item));
            }}
            type="secondary"
          />
        ))}
      </Layout>
    );
  }
};

const Layout = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 43px;
  margin-bottom: 16px;
`;
