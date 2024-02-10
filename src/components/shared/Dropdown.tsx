import React from "react";
import styled from "styled-components";
import { ArrowDown } from "../../icons/ArrowDown";
import { LatoMedium } from "../../pages/_app";

export const Dropdown = ({ label, counter }: { label: string; counter: number }) => {
  return (
    <Layout>
      <Text>{label}</Text>
      <ArrowDown />
      {!!counter && <Counter>{counter}</Counter>}
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  padding: 0 10px;
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  align-items: center;
  height: 22px;
  cursor: pointer;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.primary};
`;

const Counter = styled.div`
  position: absolute;
  right: 0;
  top: -10px;

  width: 14px;
  height: 14px;
  border-radius: 50%;

  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.accent};
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  color: ${({ theme }) => theme.contrast};
`;
