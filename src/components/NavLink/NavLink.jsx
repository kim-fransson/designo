"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

function NavLink({ children, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <Text>{children}</Text>
      <SlideInText aria-hidden={false}>{children}</SlideInText>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  color: inherit;
  position: relative;
  text-decoration: none;

  &::after {
    --tap-increment: -16px;
    content: "";
    position: absolute;
    inset: var(--tap-increment);
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${14 / 16}rem;
  line-height: ${14 / 16}rem;
  letter-spacing: ${2 / 16}rem;
  text-transform: uppercase;
`;

const SlideInText = styled(Text)`
  --underline-offset: 4px;
  position: absolute;
  inset: 0;
  will-change: transform;
  transition: clip-path 1000ms ease;
  clip-path: polygon(
    0% 0%,
    0% 0%,
    0% calc(100% + var(--underline-offset) * 2),
    0% calc(100% + var(--underline-offset) * 2)
  );
  text-decoration: underline wavy var(--color-peach);
  text-underline-offset: var(--underline-offset);

  @media (hover: hover) {
    ${Wrapper}:hover & {
      transition: clip-path 500ms ease;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% calc(100% + var(--underline-offset) * 2),
        0% calc(100% + var(--underline-offset) * 2)
      );
    }
  }
`;

export default NavLink;
