"use client";

import { QUERIES, WEIGHTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Heading from "../Heading";

function Project({ title, description, imageSrc, slug }) {
  return (
    <Container href={`/projects/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image src={imageSrc} width={700} height={640} alt='' />
        </ImageWrapper>
        <RevealableWrapper>
          <TextWrapper>
            <TitleWrapper>
              <Heading level={3}>{title}</Heading>
            </TitleWrapper>
            <Description>{description}</Description>
          </TextWrapper>
          <RevealableTextWrapper>
            <TitleWrapper>
              <Heading aria-hidden='true' level={3}>
                {title}
              </Heading>
            </TitleWrapper>
            <Description aria-hidden='true'>
              {description}
            </Description>
          </RevealableTextWrapper>
        </RevealableWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled(Link)`
  border-radius: 15px;

  /* show border radius */
  overflow: hidden;
  text-decoration: none;
  /* Better focus visibility */
  outline-offset: 4px;
  container-type: inline-size;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @container (min-width: ${600 / 16}rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 320px;
  & > img {
    height: 100%;
    object-fit: scale-down;
  }

  @media (${QUERIES.tabletAndSmaller}) {
    & > img {
      object-fit: cover;
    }
  }
`;

const RevealableWrapper = styled.div`
  position: relative;
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 16px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  background: var(--color-very-light-peach);
  color: var(--color-dark-gray);

  @container (min-width: ${600 / 16}rem) {
    justify-content: center;
  }
`;

const RevealableTextWrapper = styled(TextWrapper)`
  position: absolute;
  inset: 0;
  background: var(--color-peach);
  color: var(--color-white);
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  will-change: transform;

  @media (hover: hover) {
    ${Container}:hover &, ${Container}:focus-visible & {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: clip-path 1000ms ease;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Container}:hover &, ${Container}:focus-visible & {
      transition: clip-path 500ms ease;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  color: var(--color-peach);

  ${RevealableTextWrapper} & {
    color: var(--color-white);
  }
`;
const Description = styled.p`
  text-align: center;
`;

export default Project;
