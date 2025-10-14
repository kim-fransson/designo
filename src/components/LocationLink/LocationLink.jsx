"use client";

import { WEIGHTS } from "@/constants";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

function LocationLink({ children, id }) {
  return (
    <Wrapper>
      <ImageWrapper id={id}>
        <Image
          src={`/images/shared/desktop/illustration-${id}.svg`}
          width={202}
          height={202}
          alt=''
        />
      </ImageWrapper>
      <Title>{children}</Title>
      <Button as={Link} href={`/locations#${id}`} color='peach'>
        See location
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 202px;
  height: 202px;
  background-image: url("/images/shared/desktop/bg-pattern-small-circle.svg");

  transform: ${(props) => {
    switch (props.id) {
      case "canada":
        return "rotate(90deg)";
      case "australia":
        return "rotate(0deg)";
      case "united-kingdom":
        return "rotate(-90deg)";
    }
  }};

  & img {
    transform: ${(props) => {
      switch (props.id) {
        case "canada":
          return "rotate(-90deg)";
        case "australia":
          return "rotate(0deg)";
        case "united-kingdom":
          return "rotate(90deg)";
      }
    }};
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  margin-top: 48px;
  margin-bottom: 32px;
  font-weight: ${WEIGHTS.medium};
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
  text-align: center;
  letter-spacing: ${5 / 16}rem;
  text-transform: uppercase;

  color: var(--color-dark-gray);
`;

export default LocationLink;
