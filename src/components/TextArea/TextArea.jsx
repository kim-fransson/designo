"use client";

import React from "react";
import {
  TextField as AriaTextField,
  FieldError as AriaFieldError,
  TextArea as AriaTextArea,
} from "react-aria-components";
import ErrorIcon from "@/assets/icon-error.svg";
import styled from "styled-components";
import { WEIGHTS } from "@/constants";
import { fadeIn } from "@/animations";

function TextArea({ placeholder, ref, error, ...delegated }) {
  return (
    <Wrapper validationBehavior='aria' {...delegated}>
      <InputWrapper>
        <TextAreaInput ref={ref} placeholder={placeholder} />
        <FieldError>
          {error?.message} <ErrorIcon />
        </FieldError>
      </InputWrapper>
      <Divider />
    </Wrapper>
  );
}

const Wrapper = styled(AriaTextField)`
  position: relative;
`;

const InputWrapper = styled.div`
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 4px;
`;

const TextAreaInput = styled(AriaTextArea)`
  background: none;
  width: 100%;
  min-height: ${106 / 16}rem;
  border: none;
  /*Don't quite love this, but following figma design*/
  outline: none;
  resize: vertical;

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
  position: absolute;
  /* optical alignment */
  top: 2px;
  right: 0;
  font-style: italic;
  font-size: ${12 / 16}rem;
  line-height: ${26 / 16}rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 16px;
  animation: ${fadeIn} 250ms ease-out both;

  & svg {
    flex-shrink: 0;
  }

  @-moz-document url-prefix() {
    padding-right: 12px;
  }
`;

export default TextArea;
