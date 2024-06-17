import React from "react";
import { useRef } from "react";
import styled from "styled-components";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Description from "./modalComponents/Description";
import Title from "./modalComponents/Title";
import MarkerService from "./modalComponents/MarkerService";
import MolitCompanyWeb from "./modalComponents/MolitCompanyWeb";
import MolitWeb from "./modalComponents/MolitWeb";
import AutomlWeb from "./modalComponents/AutomlWeb";
import AutomlApplicationWeb from "./modalComponents/AutomlApplicationWeb";
import Founder from "./modalComponents/Founder";
import NodeLinkDataWeb from "./modalComponents/NodeLinkDataWeb";
import MsitCompanyWeb from "./modalComponents/MsitCompanyWeb";
import MsitWeb from "./modalComponents/MsitWeb";
import { ZoomIn, ZoomOut } from "../styles/animation";
import { projectImageData } from "../data/projectImageData";
import { media } from "../styles/media";

const Modal = ({ isUnmount, showModal, closeModal, project }) => {
  const backgroundRef = useRef();

  const modalBgClickHandler = (e) => {
    if (e.target === backgroundRef.current) {
      closeModal();
    }
  };

  const routeModalContents = () => {
    switch(project.id){
      case 1: return <MarkerService/>;
      case 2: return <MolitWeb/>;
      case 3: return <AutomlWeb/>;
      case 4: return <MolitCompanyWeb/>;
      case 5: return <AutomlApplicationWeb/>;
      case 6: return <Founder/>;
      case 7: return <NodeLinkDataWeb/>;
      case 8: return <MsitCompanyWeb/>;
      case 9: return <MsitWeb/>;
      default: return <>설명이 없습니다.</>;
    }
  }

  const modalSectionContents = () => {

    const modalContentData = projectImageData.find((obj) => obj.projectId === project.id);

    return (<>
      <Title title={project.title} />
      <div className="period">{project.period} ({modalContentData.personnel})</div>

      <div className="project_info__box">
        {/* 이미지 */}
        <div className="project_img__box">
          {/* 슬라이드 */}
          <Swiper
            zoom={true}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            loop={true}
            className="project_slider"
          >
            {modalContentData.image.map((content) => (
              <SwiperSlide>
                <Wrap>
                  <img
                    src={content}
                    loading="lazy"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                </Wrap>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 상세 설명 */}
        <div className="project_descriptions__box">
          <div className="project_main-description">
            {routeModalContents(modalContentData)}
          </div>
          {modalContentData.description.map((des) => {
            if(des.value){
              return (<Description
                label={des.label}
                value={des.value}
              />)
            }
          })}
        </div>
      </div>
    </>)
  }

  return (
    <Background
      ref={backgroundRef}
      onClick={(e) => modalBgClickHandler(e)}
      mount={isUnmount}
    >
      <ModalMainBox>
        {modalSectionContents()}
      </ModalMainBox>
    </Background>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 94%;
  background-color: #f1f3f5;

  img{
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`

const ModalMainBox = styled.div`
  width: 50%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 8px;

  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.4);

  padding: 2rem;

  .period{
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: #6c757d;
    text-align: center;
    opacity: .8;
  }

  .project_info__box{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    -webkit-box-pack: center;
    
    /* 이미지 박스 */
    .project_img__box{
      width: 50%;
      margin-right: 3rem;

      .project_slider{
        width: 100%;
        height: 70%;
        object-fit: contain;

        .swiper-button-prev,
        .swiper-button-next {
          color: #dee2e6 !important;
          transition: color 0.4s, transform 0.3s;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #868e96 !important;
        }

        .swiper-pagination-fraction {
          color: #ccc !important;
        }
      }
    }

    /* 설명 박스 */
    .project_descriptions__box{
      width: calc(50% - 3rem);
      box-sizing: border-box;

      .project_main-description{
        font-size: 1rem;
        line-height: 1.2;
        border-bottom: 1px solid #ccc;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        font-weight: 400;
        font-size: 1rem;

        p{
          margin-bottom: 1rem;
        }

        button{
          display: table;
          padding: .7rem 1rem;
          background-color: #222;
          border-radius: .25rem;
          color: #fff;
          cursor: pointer;
          border: none;
          transition: background-color .5s;

          &:hover{
            background-color: #6c757d;
          }
        }
      }
    }
  }

  ${media.xl`
    width: 65%;
    height: 80%;
    overflow: auto;
    .project_info__box{
      flex-flow: wrap;
      justify-content: start;
      flex-direction: column;
      gap: 1rem;
      
      .project_img__box{
        width: 100%;
        margin-right: 0;
        padding-bottom: 1rem;
      }

      .project_descriptions__box{
        width: 100%;
      }

    }
  `}
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;

  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  animation: ${(props) => (props.mount ? ZoomIn : ZoomOut)} 0.6s ease-in-out;

  ${media.xl`
    top: 0;
  `}
`;
export default Modal;
