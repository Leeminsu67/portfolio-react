import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// 일괄적인 박스 스타일을 props로 받아온 다음 나머지 grid 속성을 부여
const ProjectBox = ({handleClick}) => {
  // const navigate = useNavigate();

  const Box = styled(GridItemBox)`
    grid-column: 1/2;
    grid-row: 1/4;

    overflow-y: auto;

    &:hover{
      transform: scale(1);
      z-index: 1;
    }
  `
  return (
    // <Box onClick={()=> handleClick('project')}> 
    <Box> 
      <Title>
        Projects
        <small>클릭 하면 상세히 볼 수 있습니다.</small>
      </Title>
      <Warpper>
        <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation
            loop={true}
            modules={[
              Pagination, 
              Navigation, 
              Scrollbar,
              A11y]}
          >

          <SwiperSlide>
            <Wrap onClick={()=> handleClick('project')}>
              <div className='period'>2022.01 ~ 2022.01</div>
              <div className='title'>지도 기반 Node, Link 데이터 수집 웹</div>
              <div className='sub-title'>주요내용</div>
              <ol>
                <li>네이버 지도 API 기반</li>
                <li>Marker 및 Polyline 기능 커스터마이징</li>
                <li>좌표 및 도로 데이터베이스에 수집</li>
              </ol>
              <div className='sub-title'>기여한 점(100%)</div>
              <ol>
                <li></li>
                <li>Marker 및 Polyline 기능 커스터마이징</li>
                <li>좌표 및 도로 데이터 수집 후 데이터베이스에 데이터 저장</li>
              </ol>
              {/* <div className='description'>
              해운대 지역의 전체 도로 데이터를 실내에서 PC를 통해 수집하기.
              </div> */}
              <div className='sub-title'>결과/성과</div>
              {/* <div className='description'>
                기존에는 10명의 인원이 한 달 동안 외부에서 데이터를 수집하려 했으나, 
                실내에서 2명의 인원이 3주 동안 데이터 수집을 완료하도록 변경(시간 단축 및 인력 낭비 최소화).
              </div> */}
              <ol>
                <li>
                  기존에는 10명의 인원이 한 달 동안 외부에서 데이터를 수집할 계획이었으나, 
                  실내에서 2명의 인원이 3주 동안 데이터 수집을 완료하도록 변경(시간 단축 및 인력 낭비 최소화).
                </li>
              </ol>
            </Wrap>
          </SwiperSlide>



          <SwiperSlide>
            <Wrap>
              22
            </Wrap>
          </SwiperSlide>
        </Swiper>
        {/* <div>
          <div>2024.05</div>
          <div>포트폴리오 웹</div>
          <div>프론트엔드</div>
        </div>
        <div>
          <div>2022.1 ~ 2022.12</div>
          <div>과기부 주요광역시 전동보장구 지도관리 웹</div>
          <div>프론트엔드</div>
        </div>
        <div>
          <div>2023.1 ~ 2024.02</div>
          <div>국토부 주요광역시 전동보장구 지도관리 웹</div>
          <div>풀스택</div>
        </div>
        <div>
          <div>2022.09 ~ 2022.10</div>
          <div>중기청 AutoML 상반신 비식별화 웹</div>
          <div>풀스택</div>
        </div>
        <div>
          <div>2023.09 ~ 2023.10</div>
          <div>중기청 AutoML 신청자 웹</div>
          <div>프론트엔드</div>
        </div> */}
      </Warpper>
    </Box>
  );
}

const Warpper = styled.article`
  margin-top: 1.4rem;
  width: 100%;
  height: 85%;

  .swiper{
    width: 100%;
    height: 100%;

    .swiper-slide{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-button-prev::after, 
    .swiper-button-next::after{
      font-size: 20px;
      font-weight: 700;
    }

    .swiper-button-prev, .swiper-button-next{
      color: #dee2e6 !important;
      transition: color .4s, transform .3s;
    }

    .swiper-button-prev:hover, .swiper-button-next:hover{
      color: #868e96 !important;
    }

    .swiper-button-prev:hover::after, .swiper-button-next:hover::after{
      transform: scale(1.3)
    }

    .swiper-pagination-fraction {
        left: 10%;
        width: 80%;
        bottom: 3px;
    }
  }
`

// slide content
const Wrap = styled.div`
  width: 80%;
  height: 90%;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 5px 10px -5px,
    rgb(0 0 0/63%) 0px 2px 5px -5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;


  &:hover {
    box-shadow: rgb(0 0 0/80%) 0px 10px 20px -16px,
      rgb(0 0 0/72%) 0px 10px 10px -10px;
    transform: scale(1.02);
    border-color: rgba(249, 249, 249, 0.8);
  }

  .period, .title, .sub-title{
    font-weight: 700;
  }

  .description{
    font-size: 14px;
  }

  ol{
    list-style-type: decimal;
    padding-left: 1rem;
  }

  ol li{
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

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

export default ProjectBox