import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';

const IntroductionBox = () => {
  const Box = styled(GridItemBox)`
    grid-column: 2/4;
    grid-row: 2/4;
  `

  return (
    <Box>Aboute Me</Box>
  );
}

export default IntroductionBox