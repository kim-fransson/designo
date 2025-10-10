"use client";

import { WEIGHTS } from "@/constants";
import React from "react";
import styled from "styled-components";

function Button({ children, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Background>
        <Text>{children}</Text>
      </Background>
      <RevealableBackground>
        <Text aria-hidden='true'>{children}</Text>
      </RevealableBackground>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: relative;
  text-decoration: none;
`;

const Background = styled.div`
  display: grid;
  place-content: center;
  height: ${56 / 16}rem;
  color: var(--color-dark-gray);
  background: var(--color-white);
  padding: 0px 24px;
  border-radius: 8px;
`;

const RevealableBackground = styled(Background)`
  position: absolute;
  inset: 0;
  background: var(--color-light-peach);
  color: var(--color-white);
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  will-change: transform;
  transition: clip-path 1000ms ease;

  @media (hover: hover) {
    ${Wrapper}:hover & {
      transition: clip-path 500ms ease;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
`;

const Text = styled.span`
  font-weight: ${WEIGHTS.medium};
  font-size: ${15 / 16}rem;
  line-height: ${22 / 16}rem;
  letter-spacing: ${1 / 16}rem;
  text-transform: uppercase;
`;

export default Button;
