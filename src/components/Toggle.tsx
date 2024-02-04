import React, { useState } from "react";
import styled from "styled-components";
import { LatoMedium } from "../pages/_app";
import { FilterType } from "./Preferences/Filter";

export const Toggle = ({
  label,
  state,
  setState,
  type,
}: {
  label: string;
  state: boolean;
  setState: () => void;
  type: FilterType;
}) => {
  return (
    <Label>
      <InvisibleInput type="checkbox" checked={!!state} onChange={setState} />
      <Span type={type}>{label}</Span>
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Span = styled.span<{ type?: FilterType }>`
  border: 2px solid ${({ theme, type }) => (type === "secondary" ? theme.secondary : theme.primary)};
  padding: ${({ theme, type }) => (type === "secondary" ? "8px 16px 9px 16px" : "10px 20px 11px")};

  /* width: 27px;
  height: 22px; */
  white-space: nowrap;
  font-family: ${LatoMedium.style.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  color: rgba(255, 255, 255, 1);
  background-color: ${({ theme, type }) => (type === "secondary" ? theme.secondary : theme.primary)};
  user-select: none;
`;

const InvisibleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  &:checked + ${Span} {
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.contrast};
  }
`;
