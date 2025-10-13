"use client";

import GetInTouch from "@/components/GetInTouch";
import LearnMore from "@/components/LearnMore";
import OurValues from "@/components/OurValues";
import ProductLinks from "@/components/ProductLinks";
import VisuallyHidden from "@/components/VisuallyHidden";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <VisuallyHidden as='div'>
        <h1>Home</h1>
      </VisuallyHidden>
      <LearnMore />
      <ProductLinks />
      <OurValues />
      <GetInTouchWrapper>
        <GetInTouch />
      </GetInTouchWrapper>
      <LeafOne />
      <LeafTwo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

const GetInTouchWrapper = styled.div`
  margin-bottom: -75px;
`;

const Leaf = styled.div`
  position: absolute;
  z-index: -1;
  background-image: url("/images/shared/desktop/bg-pattern-leaf.svg");
  background-repeat: no-repeat;
  width: 1006px;
  height: 594px;
`;

const LeafOne = styled(Leaf)`
  left: 0px;
  top: 475px;
`;

const LeafTwo = styled(Leaf)`
  right: 0px;
  top: 1879px;
  transform: rotate(180deg);
`;
