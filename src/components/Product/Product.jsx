"use client";

import { WEIGHTS } from "@/constants";
import React from "react";
import styled from "styled-components";
import GetInTouch from "../GetInTouch";
import { products } from "@/products";
import ProductLink from "../ProductLink";
import Project from "../Project";
import VisuallyHidden from "../VisuallyHidden";

function Product({ product }) {
  const { title, description, id, background, projects } = product;
  return (
    <Wrapper>
      <Header id={id} background={background}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>

      <VisuallyHidden as='div'>
        <h2>Our projects</h2>
      </VisuallyHidden>
      <ProjectList>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ProjectList>

      <ProductLinks>
        {products
          .filter((p) => p.id !== id)
          .map((otherProduct) => (
            <ProductLink
              key={otherProduct.id}
              product={otherProduct}
            />
          ))}
      </ProductLinks>

      <GetInTouchWrapper>
        <GetInTouch />
      </GetInTouchWrapper>
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
  background-image: ${(props) =>
    props.background ? `url(${props.background})` : "none"};
  color: var(--color-white);

  background-position: ${(props) => {
    switch (props.id) {
      case "web":
        return "right center";
      case "app":
        return "left center";
      case "design":
        return "left center";
    }
  }};

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

const ProjectList = styled.div`
  --min-column-width: min(325px, 100%);
  display: grid;
  gap: 32px 30px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
`;

const ProductLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 308px;
  gap: 30px;
`;

const GetInTouchWrapper = styled.div`
  margin-bottom: -75px;
`;

export default Product;
