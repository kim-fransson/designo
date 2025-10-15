"use client";
import React from "react";
import { WEIGHTS } from "@/constants";

import styled from "styled-components";
import Image from "next/image";

export default function NotFound() {
  return (
    <Wrapper>
      <Title>404 Not Found</Title>
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
`;

const ImageWrapper = styled.div`
  position: absolute;
  transform: scale(0.5) translate(50%, -25%);
  right: 0;
`;

const Title = styled.h2`
  color: var(--color-peach);
  font-weight: ${WEIGHTS.medium};
  font-size: ${48 / 16}rem;
  line-height: ${48 / 16}rem;
  text-align: center;
`;

const Text = styled.p`
  color: var(--color-dark-gray);
  max-width: ${445 / 16}rem;
  text-align: center;
  line-height: ${26 / 16}rem;
`;
