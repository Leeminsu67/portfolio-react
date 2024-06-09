import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';

const CareerBox = ({handleClick}) => {
  const Box = styled(GridItemBox)`
    grid-column: 1/3;
    grid-row: 4/5;

    overflow-y: auto;
    cursor: pointer;
  `

  return (
    <Box onClick={()=> handleClick('career')}>
      <Title>Career <small>클릭 하면 상세히 볼 수 있습니다.</small></Title>
      <CareerContainer>
        <img src="https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2023/4/2979v00aRg_fKvv8b9xv3422g0gvYtIx_5k5y2vg.gif?v=202405291456&hash=r&serviceCode=CL" alt="company-img" />
        어린이집 전자출결 서비스 개발 및 운영, R&D 연구개발을 주력 사업으로 하고 있었습니다.
        <br/><br/>
        회사에서 프론트엔드, 백엔드, 서버, 데이터베이스 개발 및 서비스 유지보수를 맡아서 했습니다.
      </CareerContainer>
    </Box>
  );
}

const CareerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;

  img{
    width: 108px;
    height: 50px;
  }

`

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  small{
    font-weight: 300;
    font-size: 0.8rem;
    color: #ccc;
    margin: auto 0;
  }
`

export default CareerBox