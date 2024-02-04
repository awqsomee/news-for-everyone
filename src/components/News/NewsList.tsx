import React from "react";
import styled from "styled-components";
import { Filter } from "../Preferences/Filter";
import { Feed } from "./Feed";
import { Preferences } from "../Preferences/Preferences";

export const NewsList = () => {
  return (
    <Layout>
      <Preferences />
      <Feed />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 90px 0;
  width: 100%;
`;
