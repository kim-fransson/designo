"use client";

import { WEIGHTS } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";

function OurValues() {
  return (
    <>
      <VisuallyHidden as='div'>
        <h2>Our values</h2>
      </VisuallyHidden>
      <Wrapper>
        <ValueWrapper>
          <PassionateImageWrapper>
            <Illustration
              src='/images/home/desktop/illustration-passionate.svg'
              width={202}
              height={202}
              alt=''
            />
          </PassionateImageWrapper>
          <Title>Passionate</Title>
          <Text>
            Each project starts with an in-depth brand research to
            ensure we only create products that serve a purpose. We
            merge art, design, and technology into exciting new
            solutions.
          </Text>
        </ValueWrapper>

        <ValueWrapper>
          <ResourceFulImageWrapper>
            <Illustration
              src='/images/home/desktop/illustration-resourceful.svg'
              width={202}
              height={202}
              alt=''
            />
          </ResourceFulImageWrapper>
          <Title>Resourceful</Title>
          <Text>
            Everything that we do has a strategic purpose. We use an
            agile approach in all of our projects and value customer
            collaboration. It guarantees superior results that fulfill
            our clients’ needs.
          </Text>
        </ValueWrapper>

        <ValueWrapper>
          <FriendlyImageWrapper>
            <Illustration
              src='/images/home/desktop/illustration-friendly.svg'
              width={202}
              height={202}
              alt=''
            />
          </FriendlyImageWrapper>
          <Title>Friendly</Title>
          <Text>
            We are a group of enthusiastic folks who know how to put
            people first. Our success depends on our customers, and we
            strive to give them the best experience a company can
            provide.
          </Text>
        </ValueWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  gap: 30px;
`;

const ValueWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageWrapper = styled.div`
  background-image: url("/images/shared/desktop/bg-pattern-small-circle.svg");
`;

const PassionateImageWrapper = styled(ImageWrapper)`
  --rotation-offset: 0deg;
`;
const ResourceFulImageWrapper = styled(ImageWrapper)`
  --rotation-offset: -90deg;
  transform: rotate(var(--rotation-offset));
`;
const FriendlyImageWrapper = styled(ImageWrapper)`
  --rotation-offset: 90deg;
  transform: rotate(var(--rotation-offset));
`;

const Illustration = styled(Image)`
  transform: rotate(calc(-1 * var(--rotation-offset)));
`;
const Title = styled.h3`
  margin-top: 46px;
  font-weight: ${WEIGHTS.medium};
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
  text-align: center;
  letter-spacing: ${5 / 16}rem;
  text-transform: uppercase;
`;
const Text = styled.p`
  margin-top: 32px;
  text-align: center;
  line-height: ${26 / 16}rem;
`;

export default OurValues;
