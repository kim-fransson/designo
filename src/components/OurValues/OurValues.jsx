"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import { QUERIES } from "@/constants";

function OurValues() {
  return (
    <Wrapper>
      <ValueContainer>
        <ValueWrapper>
          <PassionateImageWrapper>
            <Illustration
              src='/images/home/desktop/illustration-passionate.svg'
              width={202}
              height={202}
              alt=''
            />
          </PassionateImageWrapper>
          <TextWrapper>
            <TitleWrapper>
              <Heading level={3}>Passionate</Heading>
            </TitleWrapper>
            <Text>
              Each project starts with an in-depth brand research to
              ensure we only create products that serve a purpose. We
              merge art, design, and technology into exciting new
              solutions.
            </Text>
          </TextWrapper>
        </ValueWrapper>
      </ValueContainer>

      <ValueContainer>
        <ValueWrapper>
          <ResourceFulImageWrapper>
            <Illustration
              src='/images/home/desktop/illustration-resourceful.svg'
              width={202}
              height={202}
              alt=''
            />
          </ResourceFulImageWrapper>
          <TextWrapper>
            <TitleWrapper>
              <Heading level={3}>Resourceful</Heading>
            </TitleWrapper>
            <Text>
              Everything that we do has a strategic purpose. We use an
              agile approach in all of our projects and value customer
              collaboration. It guarantees superior results that
              fulfill our clients’ needs.
            </Text>
          </TextWrapper>
        </ValueWrapper>
      </ValueContainer>

      <ValueContainer>
        <ValueWrapper>
          <FriendlyImageWrapper>
            <Illustration
              src='/images/home/desktop/illustration-friendly.svg'
              width={202}
              height={202}
              alt=''
            />
          </FriendlyImageWrapper>
          <TextWrapper>
            <TitleWrapper>
              <Heading level={3}>Friendly</Heading>
            </TitleWrapper>
            <Text>
              We are a group of enthusiastic folks who know how to put
              people first. Our success depends on our customers, and
              we strive to give them the best experience a company can
              provide.
            </Text>
          </TextWrapper>
        </ValueWrapper>
      </ValueContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 80px;
  }
`;

const ValueContainer = styled.div`
  container-type: inline-size;
`;

const ValueWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;

  @container (min-width: ${700 / 16}rem) {
    flex-direction: row;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;

  @container (min-width: ${700 / 16}rem) {
    gap: 16px;
    align-items: start;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 202px;
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
const TitleWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
`;
const Text = styled.p`
  text-align: center;

  @container (min-width: ${700 / 16}rem) {
    text-align: left;
  }
`;

export default OurValues;
