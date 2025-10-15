"use client";

import Leaf from "@/components/Leaf";
import LearnMore from "@/components/LearnMore";
import OurValues from "@/components/OurValues";
import ProductLinks from "@/components/ProductLinks";
import VisuallyHidden from "@/components/VisuallyHidden";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <VisuallyHidden as='div'>
        <h1>Home</h1>
      </VisuallyHidden>
      <LearnMore />
      <ProductLinks />
      <OurValues />
      <LeafOne />
      <LeafTwo />
    </>
  );
}

const LeafOne = styled(Leaf)`
  left: 0px;
  top: 475px;
`;

const LeafTwo = styled(Leaf)`
  right: 0px;
  top: 1879px;
  transform: rotate(180deg);
`;
