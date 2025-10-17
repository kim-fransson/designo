"use client";

import { WEIGHTS } from "@/constants";
import styled from "styled-components";

const STYLES = {
  h1: {
    "--fontSize": "clamp(2rem, 2vw + 1.25rem, 3rem)",
    "--lineHeight": "clamp(2rem, 2vw + 1.25rem, 3rem)",
    "--letterSpacing": "0rem",
  },
  h2: {
    "--fontSize": "clamp(1.75rem, 3.2vw + 1rem, 2.5rem)",
    "--lineHeight": "clamp(2.25rem, 3.2vw + 1.5rem, 3rem)",
    "--letterSpacing": `${2 / 16}rem`,
  },
  h3: {
    "--fontSize": `${20 / 16}rem`,
    "--lineHeight": `${26 / 16}rem`,
    "--letterSpacing": `${5 / 16}rem`,
  },
};

function Heading({ level, children }) {
  if (typeof level !== "number" || level < 1 || level > 6) {
    throw new Error(`Unrecognized heading level: ${level}`);
  }

  const tag = `h${level}`;
  const styles = STYLES[tag];

  return (
    <Wrapper style={styles} as={tag}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  letter-spacing: var(--letterSpacing);
`;

export default Heading;
