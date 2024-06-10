import { css } from "styled-components";

const sizes = {
  df: 1920,
  xxl: 1650,
  xl: 1260,
  lg: 1000,
  md: 740,
  sm: 550,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first, ...interpolations) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {});

export { media };
