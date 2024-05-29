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
      <Title>...</Title>
      <Description>
      </Description>
    </Box>
  );
}

const Description = styled.div`
  font-size: 14px;
  margin-top: 10px;
  width: 100%;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`

export default EtcBox