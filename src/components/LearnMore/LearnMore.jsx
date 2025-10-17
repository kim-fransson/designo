"use client";

import { QUERIES } from "@/constants";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";
import Heading from "../Heading";

/*
  Currently there is contrast errors for Heading and Text
*/
function LearnMore() {
  return (
    <Wrapper>
      <InnerWrapper>
        <HeadingWrapper>
          <Heading level={1}>
            Award-winning custom designs and digital branding
            solutions
          </Heading>
        </HeadingWrapper>
        <Text>
          With over 10 years in the industry, we are experienced in
          creating fully responsive websites, app design, and engaging
          brand experiences. Find out more about our services.
        </Text>
        <Button as={Link} href='/about'>
          Learn more
        </Button>
      </InnerWrapper>
      <HeroImage
        priority={true}
        fetchPriority='high'
        src='/images/home/desktop/image-hero-phone.png'
        width={624}
        height={913}
        alt=''
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  height: ${640 / 16}rem;
  padding-left: 64px;
  background: var(--color-peach);
  background-image: url("/images/home/desktop/bg-pattern-hero-home.svg");
  background-repeat: no-repeat;
  background-position: 100% 0%;
  border-radius: 15px;
  color: var(--color-white);

  /* Hide Hero Image overflow */
  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    height: ${843 / 16}rem;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 60px;
    background-position: 150px 50%;

    /* Main padding */
    margin: 0 -40px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 80px;
    background-position: 0% 50%;
    border-radius: 0px;

    /* Main padding */
    margin: 0 -24px;
  }
`;

const InnerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: ${540 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
    max-width: ${570 / 16}rem;
  }
`;

const HeadingWrapper = styled.div`
  margin-bottom: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
  }
`;

const Text = styled.p`
  max-width: ${440 / 16}rem;
  margin-bottom: 40px;

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
    margin-bottom: 20px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-bottom: 24px;
  }
`;

const HeroImage = styled(Image)`
  position: absolute;
  left: 560px;
  top: -35px;
  object-fit: cover;
  pointer-events: none;

  @media ${QUERIES.tabletAndSmaller} {
    top: 290px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${QUERIES.phoneAndSmaller} {
    top: 300px;
  }
`;

export default LearnMore;
