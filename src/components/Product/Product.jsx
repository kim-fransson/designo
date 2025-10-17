"use client";

import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";
import { PRODUCTS } from "@/products";
import ProductLink from "../ProductLink";
import Project from "../Project";
import VisuallyHidden from "../VisuallyHidden";
import LeafBase from "../Leaf";
import Heading from "../Heading";

function Product({ product }) {
  const { title, description, id, background, projects } = product;
  return (
    <>
      <>
        <Header id={id} background={background}>
          <TitleWrapper>
            <Heading level={1}>{title}</Heading>
          </TitleWrapper>
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

        <VisuallyHidden as='div'>
          <h2>Our other products</h2>
        </VisuallyHidden>
        <ProductLinks>
          {PRODUCTS.filter((p) => p.id !== id).map((otherProduct) => (
            <ProductLink
              key={otherProduct.id}
              product={otherProduct}
              renderTitleAs='h3'
            />
          ))}
        </ProductLinks>
        <Leaf />
      </>
    </>
  );
}

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
        return "-25% center";
      case "design":
        return "-25% center";
    }
  }};

  background-repeat: repeat-y;
  border-radius: 15px;

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 -24px;
    border-radius: revert;
  }
`;
const TitleWrapper = styled.div`
  text-align: center;
`;
const Description = styled.p`
  text-align: center;
  max-width: ${400 / 16}rem;
`;

const ProjectList = styled.div`
  display: grid;
  gap: 32px 30px;
  grid-template-columns: repeat(3, 1fr);

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 40px;
  }
`;

const ProductLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-rows: 327px 327px;
    gap: 24px;
  }
`;

const Leaf = styled(LeafBase)`
  left: 0px;
  top: 281px;
`;

export default Product;
