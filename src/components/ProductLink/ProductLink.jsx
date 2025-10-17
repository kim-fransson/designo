import { QUERIES, WEIGHTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Heading from "../Heading";

function ProductLink({ product, isTall = false }) {
  return (
    <Wrapper href={product.href}>
      <ImageWrapper>
        <Picture>
          <source
            media={QUERIES.phoneAndSmaller}
            srcSet={product.image.mobile}
          />
          <source
            media={QUERIES.tabletAndSmaller}
            srcSet={product.image.tablet}
          />
          <img
            src={
              isTall
                ? product.image.desktop.large
                : product.image.desktop
            }
            alt=''
          />
        </Picture>
      </ImageWrapper>
      <InnerProductWrapper>
        <HeadingWrapper>
          <Heading level={2}>{product.title}</Heading>
        </HeadingWrapper>
        <TextWrapper>
          <Text href={product.href}>View projects</Text>
          <IconWrapper>
            <Icon
              src='/images/shared/desktop/icon-right-arrow.svg'
              width={7}
              height={10}
              alt=''
            />
          </IconWrapper>
        </TextWrapper>
      </InnerProductWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  height: 100%;
  display: block;
  position: relative;
  text-decoration: none;
  border-radius: 15px;
  /* Better focus visibility */
  outline-offset: 4px;
  /* Show border radius */
  overflow: hidden;
  background: var(--color-black);
  transition: background 1000ms ease-in;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-visible {
      background: var(--color-peach);
      transition: background 500ms ease-out;
      transition-delay: 100ms;
    }
  }
`;

const InnerProductWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 24px;
  justify-items: center;
  height: 100%;
  place-content: center;
  text-align: center;
`;

const HeadingWrapper = styled.div`
  color: var(--color-white);
  text-transform: uppercase;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Text = styled.span`
  color: var(--color-white);
  font-weight: ${WEIGHTS.medium};
  font-size: ${15 / 16}rem;
  line-height: ${22 / 16}rem;
  letter-spacing: ${5 / 16}rem;
  text-transform: uppercase;
`;

const IconWrapper = styled.div`
  transition: transform 500ms ease-in;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &, ${Wrapper}:focus-visible & {
      transform: translateX(8px) scale(1.3);
      transition: transform 200ms ease-out;
    }
  }
`;
const Icon = styled(Image)``;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  opacity: 40%;
  will-change: transform;
  transition: transform 400ms ease-in;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &, ${Wrapper}:focus-visible & {
      transform: scale(1.1);
      transition: transform 200ms ease-out;
    }
  }
`;

const Picture = styled.picture`
  height: 100%;
  width: 100%;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default ProductLink;
