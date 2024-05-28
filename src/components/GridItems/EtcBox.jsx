import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';

const EtcBox = () => {
  const Box = styled(GridItemBox)`
    grid-column: 3/4;
    grid-row: 4/5;
  `

  return (
    <Box>
      
    </Box>
  );
}

export default EtcBox