import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';

const LifeBox = () => {
  const Box = styled(GridItemBox)`
    grid-column: 1/3;
    grid-row: 4/5;
  `

  return (
    <Box>커리어</Box>
  );
}

export default LifeBox