"use client";

import { WEIGHTS } from "@/constants";
import React from "react";
import styled from "styled-components";

function Button({ children, color = "white", ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Background
        style={{
          "--background":
            color === "peach"
              ? "var(--color-peach)"
              : "var(--color-white)",
          "--color":
            color === "peach"
              ? "var(--color-white)"
              : "var(--color-dark-gray)",
        }}
      >
        <Text>{children}</Text>
      </Background>
      <RevealableBackground>
        <Text aria-hidden='true'>{children}</Text>
      </RevealableBackground>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  display: block;
  position: relative;
  text-decoration: none;
  cursor: pointer;
`;

const Background = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  height: ${56 / 16}rem;
  color: var(--color);
  background: var(--background);
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
  white-space: nowrap;
`;

export default Button;
