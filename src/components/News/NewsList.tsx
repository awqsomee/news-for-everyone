import React from "react";
import styled from "styled-components";
import { Filter } from "../Filters/Filter";
import { Feed } from "./Feed";

export const NewsList = () => {
  return (
    <Layout>
      <Filter />
      <Feed />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 90px 0;
  width: 100%;
`;
