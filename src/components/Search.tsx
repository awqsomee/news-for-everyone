import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../icons/SearchIcon";

export const Search = () => {
  return (
    <Layout>
      <Input />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 230px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  /* all: unset; */

  border: none;
  width: 100%;
  height: 20px;
  color: rgba(255, 255, 255, 1);
  border-bottom: 1px rgba(255, 255, 255, 1) solid;
  background: none;
  padding-right: 19px;

  &:focus {
    outline: none;
  }
`;

const IconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  background: none;
  aspect-ratio: 1;
  border: none;
  cursor: pointer;
  /* outline: none; */
`;
