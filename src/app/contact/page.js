"use client";

import VisuallyHidden from "@/components/VisuallyHidden";
import styled from "styled-components";

export default function Locations() {
  return (
    <Wrapper>
      <VisuallyHidden as='div'>
        <h1>Contact us</h1>
      </VisuallyHidden>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;
