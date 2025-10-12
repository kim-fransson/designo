import { WEIGHTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { products } from "./helpers";

function ProductsGrid() {
  return (
    <Wrapper>
      {products.map((product) => {
        const ProductWrapper =
          product.variant === "tall" ? TallProduct : Product;
        return (
          <ProductWrapper key={product.id} href={product.href}>
            <ImageWrapper>
              <ProductImage
                src={product.image}
                width={product.width}
                height={product.height}
                alt=''
              />
            </ImageWrapper>
            <InnerProductWrapper>
              <Title>{product.title}</Title>
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
          </ProductWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 308px 308px;
  gap: 24px 30px;
`;

const Product = styled(Link)`
  position: relative;
  text-decoration: none;
  border-radius: 15px;

  /* Better focus visibility */
  outline-offset: 4px;

  /* Show border radius */
  overflow: hidden;
`;

const TallProduct = styled(Product)`
  grid-column: 1 / 1;
  grid-row: 1 / -1;
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

const Title = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: ${40 / 16}rem;
  line-height: ${48 / 16}rem;
  letter-spacing: ${2 / 16}rem;
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
    ${Product}:hover &, ${Product}:focus-visible & {
      transform: translateX(8px) scale(1.3);
      transition: transform 200ms ease-out;
    }
  }
`;
const Icon = styled(Image)``;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  filter: brightness(50%);
  will-change: transform;
  transition: transform 400ms ease-in, filter 800ms ease-in;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Product}:hover &, ${Product}:focus-visible & {
      transform: scale(1.1);
      filter: brightness(70%);
      transition: transform 200ms ease-out, filter 400ms ease-out;
    }
  }
`;

const ProductImage = styled(Image)`
  height: 100%;
  object-fit: cover;
`;

export default ProductsGrid;
