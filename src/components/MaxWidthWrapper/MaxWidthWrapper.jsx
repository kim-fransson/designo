"use client";

import React from "react";
import styled from "styled-components";

const MaxWidthWrapper = styled.div`
  --horizontal-padding: 40px;
  max-width: min(100%, calc(1111px + var(--horizontal-padding) * 2));
  margin: 0 auto;
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
`;

export default MaxWidthWrapper;
