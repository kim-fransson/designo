"use client";

import GetInTouch from "@/components/GetInTouch";
import LearnMore from "@/components/LearnMore";
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
      <LearnMore />
      <ProductsGrid />
      <OurValues />
      <GetInTouch />
      <div />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;
