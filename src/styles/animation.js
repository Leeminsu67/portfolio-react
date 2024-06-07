import { keyframes } from "styled-components";

export const animeTimeMs = 600;

export const ZoomOut = keyframes`
  0%{
      opacity: 0;
      transform: scale(0.7);
  }
  65%{
      opacity: 0.65;
      transform: scale(1.01);
  }
  85%{
      opacity: 0.85;
      transform: scale(0.97);
  }
  100%{
      opacity: 1;
      transform: scale(1);
  }
`

export const ZoomIn = keyframes`
  0%{
      opacity: 1;
      transform: scale(1);
  }
  15%{
      opacity: 0.85;
      transform: scale(0.97);
  }
  35%{
      opacity: 0.65;
      transform: scale(0.01);
  }
  100%{
      opacity: 0;
      transform: scale(0.7);
  }
`