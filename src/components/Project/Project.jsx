"use client";

import { WEIGHTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Project({ title, description, imageSrc, slug }) {
  return (
    <Wrapper href={`/projects/${slug}`}>
      <ImageWrapper>
        <Image src={imageSrc} width={700} height={640} alt='' />
      </ImageWrapper>
      <RevealableWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>
        <RevealableTextWrapper>
          <Title aria-hidden='true'>{title}</Title>
          <Description aria-hidden='true'>{description}</Description>
        </RevealableTextWrapper>
      </RevealableWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  /* show border radius */
  overflow: hidden;
  text-decoration: none;
  /* Better focus visibility */
  outline-offset: 4px;
`;

const ImageWrapper = styled.div`
  height: 320px;
  & > img {
    height: 100%;
    object-fit: scale-down;
  }
`;

const RevealableWrapper = styled.div`
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  background: var(--color-very-light-peach);
  color: var(--color-dark-gray);
`;

const RevealableTextWrapper = styled(TextWrapper)`
  position: absolute;
  inset: 0;
  background: var(--color-peach);
  color: var(--color-white);
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  will-change: transform;

  @media (hover: hover) {
    ${Wrapper}:hover &, ${Wrapper}:focus-visible & {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: clip-path 1000ms ease;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &, ${Wrapper}:focus-visible & {
      transition: clip-path 500ms ease;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
`;

const Title = styled.h3`
  font-weight: ${WEIGHTS.medium};
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
  text-align: center;
  letter-spacing: ${5 / 16}rem;
  color: var(--color-peach);

  ${RevealableTextWrapper} & {
    color: var(--color-white);
  }
`;
const Description = styled.p`
  text-align: center;
  line-height: ${26 / 16}rem;
`;

export default Project;
