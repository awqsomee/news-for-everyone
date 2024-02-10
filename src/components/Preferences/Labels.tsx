import React from "react";
import { Dropdown } from "../shared/Dropdown";
import styled from "styled-components";

export const Labels = () => {
  return (
    <Layout>
      <Dropdown label="Категория" counter={1} />
      <Dropdown label="Метка" counter={2} />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  gap: 10px;
  height: 43px;
  align-items: center;
`;
