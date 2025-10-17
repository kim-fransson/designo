"use client";
import React from "react";
import { QUERIES, WEIGHTS } from "@/constants";

import styled from "styled-components";
import Image from "next/image";
import Heading from "@/components/Heading";

export default function NotFound() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Heading level={1}>404 Not Found</Heading>
      </TitleWrapper>
      <Text>Oh no! Our site puppy has chewed up the page!</Text>
      <ImageWrapper>
        <Image
          src='/images/404/sad-dog.svg'
          width={645}
          height={750}
          alt=''
        />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  place-content: center;
  gap: 24px;
  background: var(--color-very-light-peach);
  color: var(--color-dark-gray);
  padding: 154px 96px 154px 94px;
  border-radius: 15px;

  @media ${QUERIES.tabletAndSmaller} {
    position: revert;
    padding: 80px 24px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  transform: scale(0.5) translate(50%, -25%);
  right: 0;

  @media ${QUERIES.tabletAndSmaller} {
    position: revert;
    transform: revert;

    & img {
      height: 300px;
      object-fit: contain;
    }
  }
`;

const TitleWrapper = styled.div`
  color: var(--color-peach);
  text-align: center;
`;

const Text = styled.p`
  color: var(--color-dark-gray);
  max-width: ${445 / 16}rem;
  text-align: center;
  justify-self: center;
`;
