"use client";

import { WEIGHTS } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Project({ title, description, imageSrc }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageSrc} width={700} height={640} alt='' />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  /* show border radius */
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  height: 320px;
  & > img {
    height: 100%;
    object-fit: scale-down;
  }
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
const Title = styled.h3`
  font-weight: ${WEIGHTS.medium};
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
  text-align: center;
  letter-spacing: ${5 / 16}rem;
  color: var(--color-peach);
`;
const Description = styled.p`
  text-align: center;
  line-height: ${26 / 16}rem;
`;

export default Project;
