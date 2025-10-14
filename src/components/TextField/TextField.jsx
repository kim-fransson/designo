"use client";

import React from "react";
import {
  TextField as AriaTextField,
  Input as AriaInput,
  FieldError as AriaFieldError,
} from "react-aria-components";
import ErrorIcon from "@/assets/icon-error.svg";
import styled from "styled-components";
import { WEIGHTS } from "@/constants";
import { fadeIn } from "@/animations";

function TextField({ placeholder, ...delegated }) {
  return (
    <Wrapper autoComplete='off' {...delegated}>
      <InputWrapper>
        <Input placeholder={placeholder} />
        <FieldError>
          Can’t be empty <ErrorIcon />
        </FieldError>
      </InputWrapper>
      <Divider />
    </Wrapper>
  );
}

const Wrapper = styled(AriaTextField)`
  height: ${40 / 16}rem;
  position: relative;
`;

const InputWrapper = styled.div`
  height: ${26 / 16}rem;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
`;

const Input = styled(AriaInput)`
  background: none;
  width: 100%;
  border: none;
  /*Don't quite love this, but following figma design*/
  outline: none;

  font-weight: ${WEIGHTS.medium};
  font-size: ${15 / 16}rem;
  line-height: ${26 / 16}rem;

  color: var(--color-white);

  &::placeholder {
    font-weight: ${WEIGHTS.medium};
    font-size: ${15 / 16}rem;
    line-height: ${26 / 16}rem;

    color: var(--color-white);
    opacity: 0.5;
  }
`;

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 100%;
  background: var(--color-white);
  transform-origin: bottom;
  transition: transform 250ms ease-in-out;

  ${Wrapper}:has([data-focused]) & {
    transform: scaleY(3);
  }
`;

const FieldError = styled(AriaFieldError)`
  font-style: italic;
  font-size: ${12 / 16}rem;
  line-height: ${26 / 16}rem;
  color: var(--color-white);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 16px;
  animation: ${fadeIn} 250ms ease-out both;

  & svg {
    flex-shrink: 0;
  }
`;

export default TextField;
