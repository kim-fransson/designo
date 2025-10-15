import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";
import { products } from "@/products";
import ProductLink from "../ProductLink/ProductLink";

function ProductLinks() {
  return (
    <>
      <VisuallyHidden as='div'>
        <h2>Our products</h2>
      </VisuallyHidden>
      <Wrapper>
        {products.map((product) => {
          const ProductWrapper =
            product.variant === "tall" ? TallProduct : Product;
          return (
            <ProductWrapper key={product.id}>
              <ProductLink product={product} />
            </ProductWrapper>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 308px 308px;
  gap: 24px 30px;
`;

const Product = styled.div``;

const TallProduct = styled(Product)`
  grid-column: 1 / 1;
  grid-row: 1 / -1;
`;

export default ProductLinks;
