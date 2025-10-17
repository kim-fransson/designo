"use client";

import { QUERIES, WEIGHTS } from "@/constants";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Link from "next/link";
import Heading from "../Heading";

function GetInTouch() {
  return (
    <Wrapper>
      <TextWrapper>
        <TitleWrapper>
          <Heading level={2}>Let’s talk about your project</Heading>
        </TitleWrapper>
        <Text>
          Ready to take it to the next level? Contact us today and
          find out how our expertise can help your business grow.
        </Text>
      </TextWrapper>
      <Button as={Link} href='/contact'>
        Get in touch
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 72px 95px 70px 95px;
  background: var(--color-peach);
  background-image: url("/images/shared/desktop/bg-pattern-call-to-action.svg");
  background-position: right center;
  background-repeat: repeat-y;

  border-radius: 15px;
  color: var(--color-white);

  @media ${QUERIES.tabletAndSmaller} {
    padding: 58px;

    flex-direction: column;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 64px 24px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
  max-width: ${268 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: ${335 / 16}rem;
  }
`;

const Text = styled.p`
  max-width: ${459 / 16}rem;
`;

export default GetInTouch;
