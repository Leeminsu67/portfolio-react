import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';
import {ReactTyped} from 'react-typed';

const TitleBox = () => {

  const Box = styled(GridItemBox)`
    grid-column: 2/4;
    grid-row: 1/2;
  `

  return (
    <Box>
      <Title>- 이민수 -</Title>
      <Hr />
      <Description>
        <ReactTyped
          strings={["안녕하세요! 풀스택 개발을", "깊이 있게 다져나가고자 하는 개발자입니다."]}
          typeSpeed={50} // 타이핑 속도
          backSpeed={25} // 지우는 속도
          loop={true} // 반복할건지
          style={{
            color: "rgb(57, 62, 70)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Description>
    </Box>
  );
}

const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  padding: 10px 0;
  text-align: center;
`

const Description = styled.div`
  color: rgb(57, 62, 70);
  text-align: center;
  line-height: 1.3;
  margin-top: 15px;
`

const Hr = styled.hr`
  max-width: 300px;
`

export default TitleBox