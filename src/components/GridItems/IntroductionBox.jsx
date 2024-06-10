import React from "react";
import styled from "styled-components";
import { GridItemBox } from "../GridContainer";
import { Cake, Edit, Phone } from "@mui/icons-material";
import { media } from "../../styles/media";

const IntroductionBox = () => {
  const Box = styled(GridItemBox)`
    grid-column: 2/4;
    grid-row: 2/4;

    ${media.xl`
      grid-column: 1/5;
      grid-row: 2/4;
    `}
  `;
  return (
    <Box>
      <Title>About Me</Title>
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
              <Cake fontSize="medium" />
              1995년 06월 07일 출생
            </InfoBox>
            <InfoBox>
              <Edit fontSize="medium" />
              동의대학교 음악학과(중퇴)
            </InfoBox>
            <InfoBox>
              <Phone fontSize="medium" />
              010-9255-8764
            </InfoBox>
          </InfoWrapper>
        </BasicInfoBox>

        {/* 간략한 소개 */}
        <AboutDescription>
          <div>적응하고 소통하는 개발자입니다.</div>
          다방면으로 활약하는 유연한 개발자로, 풀스택 기반으로 서비스 유지보수와
          R&D 연구개발 전반을 담당했으며 개발 뿐만 아니라 기획 보조와 간단한
          기획을 통해 사업계획서를 기반으로 WBS 작성, 요구사항 명세,
          스토리보드를 완성했습니다. 또한 외주 업체와의 협력을 통해 일정 조율도
          수행하였습니다. <br />
          모든 과정에서 최선을 다하며, 새로운 기술과 도전에 열려 있으며, 주어진
          환경에서도 뛰어난 성과를 이루어내고 있습니다.
        </AboutDescription>
      </CardContainer>
    </Box>
  );
};

const AboutDescription = styled.div`
  width: 100%;
  line-height: 1.4;
  font-size: 14px;

  div {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 18px;
  }

  ${media.xxl`
    div {
      font-weight: 700;
      margin-bottom: 6px;
      font-size: 16px;
    }
  `}

  ${media.xl`
    div {
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 18px;
    }
  `}

  ${media.sm`
    line-height: 1.2;
    div {
      font-weight: 700;
      margin-bottom: 6px;
      font-size: 16px;
    }
  `}
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${media.xxl`
    gap: 3px;
    font-size: 14px;
  `}

  ${media.xl`
    font-size: 1rem;
  `}

  ${media.md`
    font-size: 14px;
  `}
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${media.sm`
    gap: 3px;
  `}
`;

const BasicInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CardImageBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 30%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.xxl`
    width: 80px;
    height: 80px;
  `}

  ${media.xl`
    width: 100px;
    height: 100px;
  `}

  ${media.md`
    width: 80px;
    height: 80px;
  `}
`;

const CardContainer = styled.div`
  border: 1px solid #ebeaec;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 12px;
  padding: 12px 1rem;

  display: flex;
  gap: 12px;
  flex-direction: column;

  ${media.xl`
    margin-top: 2rem;
  `}

  ${media.md`
    margin-top: 1rem;
  `}

  ${media.sm`
    margin-top: 8px;
    gap: 8px;
  `}
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`;

export default IntroductionBox;
