"use client";

import LearnMore from "@/components/LearnMore";
import MainWrapper from "@/components/MainWrapper";
import OurValues from "@/components/OurValues";
import ProductLinks from "@/components/ProductLinks";
import VisuallyHidden from "@/components/VisuallyHidden";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Home() {
  const pathname = usePathname();
  const showContactUs = pathname !== "/contact";
  return (
    <MainWrapper showContactUs={showContactUs}>
      <VisuallyHidden as='div'>
        <h1>Home</h1>
      </VisuallyHidden>
      <LearnMore />
      <ProductLinks />
      <OurValues />
      <LeafOne />
      <LeafTwo />
    </MainWrapper>
  );
}

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
