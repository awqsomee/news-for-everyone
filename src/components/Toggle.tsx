import React, { useState } from "react";
import styled from "styled-components";
import { LatoMedium } from "../pages/_app";

export const Toggle = ({ label, state, setState }: { label: string; state: boolean; setState: () => void }) => {
  return (
    <Label>
      <InvisibleInput type="checkbox" checked={state} onChange={setState} />
      <Span>{label}</Span>
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Span = styled.span`
  background: ${({ theme }) => theme.contrast};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 10px 20px 11px;

  /* width: 27px;
  height: 22px; */

  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  color: ${({ theme }) => theme.contrast};
  background-color: ${({ theme }) => theme.primary};
  user-select: none;
`;

const InvisibleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  &:checked + ${Span} {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.contrast};
  }
`;
