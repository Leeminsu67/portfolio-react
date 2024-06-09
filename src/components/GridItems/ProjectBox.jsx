import React from "react";
import styled from "styled-components";
import { GridItemBox } from "../GridContainer";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { projectBoxData } from "../../data/projectBoxData";

// 일괄적인 박스 스타일을 props로 받아온 다음 나머지 grid 속성을 부여
const ProjectBox = ({ handleClick }) => {
  // const navigate = useNavigate();

  const Box = styled(GridItemBox)`
    grid-column: 1/2;
    grid-row: 1/4;

    overflow-y: auto;

    &:hover {
      transform: scale(1);
      z-index: 1;
    }
  `;
  return (
    // <Box onClick={()=> handleClick('project')}>
    <Box>
      <Title>
        Projects
        <small>클릭 하면 상세히 볼 수 있습니다.</small>
      </Title>
      <Warpper>
        <Swiper
          // style={{
          //   "--swiper-navigation-color": "#03a9f4",
          //   "--swiper-pagination-color": "#03a9f4",
          // }}
          pagination={{
            clickable: true,
          }}
          navigation
          loop={true}
          modules={[Pagination, Navigation, Scrollbar, A11y]}
        >
          {projectBoxData.map((project, index) => (
            <SwiperSlide>
              <Wrap onClick={() => handleClick("project")}>
                <div className="period">{project.period}</div>
                <div className="title">{project.title}</div>
                <div className="sub-title">주요내용</div>
                <ol>
                  {project.mainContent.map((content) => (
                    <li>{content}</li>
                  ))}
                </ol>
                <div className="sub-title">
                  기여한 점({project.contribution}%)
                </div>
                <ol>
                  {project.contribute.map((content) => (
                    <li>{content}</li>
                  ))}
                </ol>
                <div className="sub-title">결과/성과</div>
                <ol>
                  {project.result.map((content) => (
                    <li>{content}</li>
                  ))}
                </ol>
              </Wrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </Warpper>
    </Box>
  );
};

const Warpper = styled.article`
  margin-top: 1.4rem;
  width: 100%;
  height: 85%;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 20px;
      font-weight: 700;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #dee2e6 !important;
      transition: color 0.4s, transform 0.3s;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      color: #868e96 !important;
    }

    .swiper-button-prev:hover::after,
    .swiper-button-next:hover::after {
      transform: scale(1.3);
    }

    /* .swiper-pagination-fraction {
      width: 80%;
      bottom: 0 !important;
      padding: 4px 8px;
      backdrop-filter: blur(10px);
    } */

    .swiper-pagination {
      text-align: center !important;
      padding-top: 2px;
      padding-bottom: 2px;
      backdrop-filter: blur(10px);
    }

    .swiper-pagination-bullet {
      background-color: gray !important;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #03a9f4 !important;
    }
  }
`;

// slide content
const Wrap = styled.div`
  width: 80%;
  height: 90%;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 5px 10px -5px, rgb(0 0 0/63%) 0px 2px 5px -5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;

  /* &:hover {
    box-shadow: rgb(0 0 0/80%) 0px 10px 20px -16px,
      rgb(0 0 0/72%) 0px 10px 10px -10px;
    transform: scale(1.02);
    border-color: rgba(249, 249, 249, 0.8);
  } */

  .period,
  .title,
  .sub-title {
    font-weight: 700;
  }

  .description {
    font-size: 14px;
  }

  ol {
    list-style-type: decimal;
    padding-left: 1rem;
  }

  ol li {
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

  small {
    font-weight: 300;
    font-size: 0.8rem;
    color: #ccc;
    margin: auto 0;
  }
`;

export default ProjectBox;
