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
      <Title>기타</Title>
      <EtcContent>
        <div>
          <img src="img/sqld.png" alt="sqld" />
          <span>
            SQL 개발자 자격증
          </span>
        </div>
      </EtcContent>
    </Box>
  );
}

const EtcContent = styled.div`
  font-size: 14px;
  margin-top: 10px;
  width: 100%;

  div{
    display: flex;
    align-items: center;
    img{
      width: 100px;
    }
  }
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`

export default EtcBox