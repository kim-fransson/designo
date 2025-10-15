"use client";

import { QUERIES } from "@/constants";
import styled from "styled-components";

const Leaf = styled.div`
  position: absolute;
  z-index: -1;
  background-image: url("/images/shared/desktop/bg-pattern-leaf.svg");
  background-repeat: no-repeat;
  width: 1006px;
  height: 594px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Leaf;
