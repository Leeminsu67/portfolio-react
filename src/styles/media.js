import { css } from "styled-components";


const sizes = {
  xr: 1250,
  lg: 1000,
  md: 740,
  sm: 550,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first,
      ...interpolations
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) ;

export { media };