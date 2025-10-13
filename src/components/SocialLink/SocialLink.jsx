"use client";

import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";
import { metadata } from "./helpers";

function SocialLink({ id }) {
  const { href, text, icon: Icon } = metadata[id];
  return (
    <Wrapper href={href} target='_blank'>
      <VisuallyHidden>{text}</VisuallyHidden>
      <Icon />
      <Revealable>
        <Icon />
      </Revealable>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  position: relative;
  color: var(--color-peach);
`;

const Revealable = styled.div`
  position: absolute;
  inset: 0;
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  color: var(--color-light-peach);
  transition: clip-path 1000ms ease;
  will-change: transform;

  @media (hover: hover) {
    ${Wrapper}:hover & {
      transition: clip-path 500ms ease;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
`;

export default SocialLink;
