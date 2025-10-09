"use client";

import { COLORS } from "@/constants";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

#root, #__next {
  isolation: isolate;
}

html {
  --color-white: hsl(${COLORS.white});
  --color-peach: hsl(${COLORS.peach});
  --color-black: hsl(${COLORS.black});
  --color-light-peach: hsl(${COLORS["light-peach"]});
  --color-light-gray: hsl(${COLORS["light-gray"]});
  --color-dark-gray: hsl(${COLORS["dark-gray"]});
}

body {
  font-family: var(--font-sans);
  color: var(--color-dark-gray);
  background: var(--color-white);
}

html, body {
  height: 100%;
}
`;

export default GlobalStyles;
