"use client";

import { WEIGHTS } from "@/constants";
import React from "react";
import styled from "styled-components";

function Product({ product }) {
  const { title, description } = product;
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <div />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

const Header = styled.header`
  padding: 64px;
  display: grid;
  gap: 24px;
  place-content: center;
  background: var(--color-peach);
  background-image: url("/images/shared/desktop/bg-pattern-call-to-action.svg");
  color: var(--color-white);
  background-position: left center;
  background-repeat: repeat-y;
  border-radius: 15px;
`;
const Title = styled.h1`
  font-weight: ${WEIGHTS.medium};
  font-size: ${48 / 16}rem;
  line-height: ${48 / 16}rem;
  text-align: center;
`;
const Description = styled.p`
  line-height: ${26 / 16}rem;
  text-align: center;
  max-width: ${400 / 16}rem;
`;

export default Product;
