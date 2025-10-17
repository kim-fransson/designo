import React from "react";
import styled from "styled-components";
import { PRODUCTS } from "@/products";
import ProductLink from "../ProductLink/ProductLink";
import { QUERIES } from "@/constants";

function ProductLinks() {
  return (
    <Wrapper>
      {PRODUCTS.map((product) => {
        const ProductWrapper =
          product.variant === "tall" ? TallProduct : Product;
        return (
          <ProductWrapper key={product.id}>
            <ProductLink
              product={product}
              isTall={product.variant === "tall"}
            />
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

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    grid-template-rows: revert;
    grid-auto-rows: minmax(200px, auto);
  }

  @media ${QUERIES.tabletAndSmaller} {
    grid-auto-rows: minmax(250px, auto);
  }
`;

const Product = styled.div``;

const TallProduct = styled(Product)`
  grid-column: 1 / 1;
  grid-row: 1 / -1;

  @media ${QUERIES.tabletAndSmaller} {
    grid-column: revert;
    grid-row: revert;
  }
`;

export default ProductLinks;
