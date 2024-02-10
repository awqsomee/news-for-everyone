import React from "react";
import styled from "styled-components";
import { Close } from "../../icons/Close";
import { LatoMedium } from "../../pages/_app";

export const Label = ({ label }: { label: string }) => {
  return (
    <Layout>
      {label}
      <Close />
    </Layout>
  );
};

const Layout = styled.div`
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${({ theme }) => theme.secondary};

  display: flex;
  gap: 5px;
  padding: 8px 7px 9px 16px;
  cursor: pointer;
`;
