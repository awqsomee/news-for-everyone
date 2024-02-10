import React from "react";
import styled from "styled-components";
import { Label } from "./Label";
import { LatoMedium } from "../../pages/_app";

export const LabelRow = () => {
  return (
    <Layout>
      <Label label="Хорошее" />
      <Label label="Плохое" />
      <Label label="новое" />
      <Reset>сбросить все</Reset>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
`;

const Reset = styled.button`
  padding: auto 0 auto 16px;
  border: none;
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
