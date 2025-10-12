"use client";

import LearnMoreCard from "@/components/LearnMoreCard";
import OurValues from "@/components/OurValues";
import ProductsGrid from "@/components/ProductsGrid";
import VisuallyHidden from "@/components/VisuallyHidden";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <VisuallyHidden>
        <h1>Home</h1>
      </VisuallyHidden>
      <LearnMoreCard />
      <ProductsGrid />
      <OurValues />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;
