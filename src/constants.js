export const COLORS = {
  peach: "11deg 73% 66%",
  "light-peach": "11deg 100% 81%",
  black: "270deg 4% 12%",
  "dark-gray": "264deg 5% 20%",
  "light-gray": "200deg 11% 96%",
  white: "0deg 0% 100%",
};

export const WEIGHTS = {
  bold: 700,
  medium: 500,
  regular: 400,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

// desktop-first
export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `max-width: ${BREAKPOINTS.laptop / 16}rem`,
};

export const TITLE = "Designo";
export const DESCRIPTION =
  "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.";
