import React, { useState } from "react";
import styled from "styled-components";
import ProjectBox from "./GridItems/ProjectBox";
import TitleBox from "./GridItems/TitleBox";
import GitHubBox from "./GridItems/GitHubBox";
import IntroductionBox from "./GridItems/IntroductionBox";
import SkillBox from "./GridItems/SkillBox";
import EtcBox from "./GridItems/EtcBox";
import { media } from "../styles/media";
import CareerBox from "./GridItems/CareerBox";
import Modal from "./Modal";
import { animeTimeMs } from "../styles/animation";

const GridContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState({id: 0});
  const [isUnmount, setIsUnmount] = useState(false);

  const closeModal = () => {
    setIsUnmount(true);

    setTimeout(() => {
      setIsOpen(false);
    }, animeTimeMs);
  };

  const showModal = (section) => {
    setIsUnmount(false);
    setIsOpen(true);
    setProject(section);
  };

  return (
    <>
      <MainGridContainer>
        <ProjectBox 
          handleClick={showModal}
          swiperSection={project.id - 1}
        />
        <TitleBox />
        <GitHubBox />
        <IntroductionBox />
        <SkillBox />
        <CareerBox handleClick={showModal} />
        <EtcBox />
      </MainGridContainer>
      {isOpen && (
        <Modal
          isUnmount={isUnmount}
          showModal={showModal}
          closeModal={closeModal}
          project={project}
        />
      )}
    </>
  );
};

const MainGridContainer = styled.main`
  width: 80%;
  max-width: 1600px;
  min-width: 1200px;
  height: 75%;
  max-height: 700px;
  min-height: 650px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  gap: 0.8rem;

  ${media.xl`
    min-width: auto;
    min-height: auto;
    width: 95%;
    height: auto;
    max-height: none;

    grid-template-rows: repeat(7, 170px);
  `}

  ${media.md`
    grid-template-rows: repeat(11, 170px);
  `}
`;
// Grid item 공통 스타일
export const GridItemBox = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.4);
  padding: 1rem 1rem;

  transition: transform 0.4s;

  &:hover {
    transform: scale(1.04);
    z-index: 1;
  }
`;

export default GridContainer;
