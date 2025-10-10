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
          <ProductWrapper key={product.id}>
            <ImageWrapper>
              <ProductImage
                src={product.image}
                width={product.width}
                height={product.height}
                alt={product.alt}
              />
            </ImageWrapper>
            <InnerProductWrapper>
              <Title>{product.title}</Title>
              <LinkWrapper>
                <ProductLink href={product.href}>
                  View projects
                </ProductLink>
                <IconWrapper>
                  <Icon
                    src='/images/shared/desktop/icon-right-arrow.svg'
                    width={7}
                    height={10}
                    alt=''
                  />
                </IconWrapper>
              </LinkWrapper>
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

const Product = styled.article`
  position: relative;
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
`;

const Title = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: ${40 / 16}rem;
  line-height: ${48 / 16}rem;
  letter-spacing: ${2 / 16}rem;
  color: var(--color-white);
  text-transform: uppercase;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: var(--color-white);
  font-weight: ${WEIGHTS.medium};
  font-size: ${15 / 16}rem;
  line-height: ${22 / 16}rem;
  letter-spacing: ${5 / 16}rem;
  text-transform: uppercase;
`;

const IconWrapper = styled.div``;
const Icon = styled(Image)``;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  filter: brightness(0.5);
`;

const ProductImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export default ProductsGrid;
