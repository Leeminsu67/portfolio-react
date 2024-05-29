import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';
import { Cake, Edit, Phone } from '@mui/icons-material';

const IntroductionBox = () => {
  const Box = styled(GridItemBox)`
    grid-column: 2/4;
    grid-row: 2/4;
  `

  return (
    <Box>
      <Title>
        About Me
      </Title>
      {/* Card */}
      <CardContainer>
        <BasicInfoBox>
          {/* 이미지 */}
          <CardImageBox>
            <img src="img/profile.jpeg" alt="profile" />
          </CardImageBox>

          {/* 간략한 정보 */}
          <InfoWrapper>
            <InfoBox>
              <Cake fontSize='medium' />
              1995년 06월 07일 출생
            </InfoBox>
            <InfoBox>
              <Edit fontSize='medium' />
              동의대학교 음악학과(중퇴)
            </InfoBox>
            <InfoBox>
              <Phone fontSize='medium' />
              010-9255-8764
            </InfoBox>
          </InfoWrapper>
        </BasicInfoBox>

        {/* 간략한 소개 */}
        <AboutDescription>
          <div>적응하고 소통하는 개발자입니다.</div>
          dasgikoldsangoiasngiowengaweionioniogdahadfshadfdasgiko ldsan
          goiasngiowengaweionioniogdahadfshadfdasgiko ldsangoiasngi 
          dasgikoldsangoiasngiowen gaweionioniogdahadfshadf

          dasgikoldsangoiasngiowengaweionioniogdahadfshadf

        </AboutDescription>
      </CardContainer>
    </Box>
  );
}

const AboutDescription = styled.div`
width: 100%;
  div{
    font-weight: 700;
    margin-bottom: 10px;
  }
`

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const BasicInfoBox = styled.div`
  padding: 0 8rem;
  display: flex;
  justify-content: space-between;
`

const CardImageBox = styled.div`
  width: 100px;
  height: 100px; 
  border-radius: 30%;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardContainer = styled.div`
  border:1px solid #ebeaec;
  box-shadow:0px 2px 4px rgba(0,0,0,0.3);
  box-sizing: border-box;
  border-radius:16px;
  margin-top: 15px;
  padding: 1rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`

export default IntroductionBox