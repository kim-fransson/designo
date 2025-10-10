"use client";

import { WEIGHTS } from "@/constants";
import Link from "next/link";
import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../Button";
import Image from "next/image";
import { fadeIn } from "@/animations";

/*
  Currently there is contrast errors for Heading and Text
*/
function LearnMoreCard() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Heading>
          Award-winning custom designs and digital branding solutions
        </Heading>
        <Text>
          With over 10 years in the industry, we are experienced in
          creating fully responsive websites, app design, and engaging
          brand experiences. Find out more about our services.
        </Text>
        <Button as={Link} href='/about'>
          Learn more
        </Button>
        <Perspective>
          <ImageWrapper>
            <Image
              src='/images/home/desktop/image-hero-phone.png'
              width={624}
              height={913}
              alt='A smart phone displaying the text FRAME in front of decorative vases'
            />
          </ImageWrapper>
        </Perspective>
      </InnerWrapper>
    </Wrapper>
  );
}

const RotateIn = keyframes`
from {
  transform: translate(100px, 100px) rotateY(60deg);
}

to {
  transform: translate(0px, 0px) rotateY(0deg);
}
`;

const Wrapper = styled.article`
  position: relative;
  padding: 140px 95px 145px 95px;
  background: var(--color-peach);
  background-image: url("/images/home/desktop/bg-pattern-hero-home.svg");
  background-repeat: no-repeat;
  background-position: 100% 0%;
  border-radius: 15px;
  color: var(--color-white);

  /* Hide Hero Image overflow */
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 540px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 2000ms ease-out both;
  }
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: ${48 / 16}rem;
  line-height: ${48 / 16}rem;
  margin-bottom: 32px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: ${26 / 16}rem;
  max-width: 440px;
  margin-bottom: 40px;
`;

const Perspective = styled.div`
  position: absolute;
  right: -74px;
  top: -34px;
  perspective: 600px;
  transform-style: preserve-3d;
`;

const ImageWrapper = styled.div`
  object-fit: cover;

  /* Issues with slow connection, animation runs before image is loaded */
  /* @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 2000ms ease-out both,
      ${RotateIn} 1000ms ease-out both;
  } */
`;

export default LearnMoreCard;
