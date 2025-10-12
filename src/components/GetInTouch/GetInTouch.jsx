"use client";

import { WEIGHTS } from "@/constants";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Link from "next/link";

function GetInTouch() {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Let’s talk about your project</Title>
        <Text>
          Ready to take it to the next level? Contact us today and
          find out how our expertise can help your business grow.
        </Text>
      </TextWrapper>
      <ButtonWrapper>
        <Button as={Link} href='/contact'>
          Get in touch
        </Button>
      </ButtonWrapper>
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
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: ${40 / 16}rem;
  line-height: ${40 / 16}rem;
  max-width: ${268 / 16}rem;
`;

const Text = styled.p`
  line-height: ${26 / 16}rem;
  max-width: ${459 / 16}rem;
`;

const ButtonWrapper = styled.div`
  max-width: ${152 / 16}rem;
`;

export default GetInTouch;
