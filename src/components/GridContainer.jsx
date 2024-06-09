import React, { useState } from 'react'
import styled from 'styled-components'
import ProjectBox from './GridItems/ProjectBox'
import TitleBox from './GridItems/TitleBox'
import GitHubBox from './GridItems/GitHubBox'
import IntroductionBox from './GridItems/IntroductionBox'
import SkillBox from './GridItems/SkillBox'
import EtcBox from './GridItems/EtcBox'
import { media } from '../styles/media'
import CareerBox from './GridItems/CareerBox'
import Modal from './Modal'
import { animeTimeMs } from '../styles/animation';

const GridContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnmount, setIsUnmount] = useState(false);

  const closeModal = () => {
    setIsUnmount(true);

    setTimeout(() => {
      setIsOpen(false)
    }, animeTimeMs);
  }

  const showModal = () => {
    setIsUnmount(false)
    setIsOpen(true);
  };

  return (
    <>
      <MainGridContainer>
        <ProjectBox handleClick={showModal} />
        <TitleBox />
        <GitHubBox />
        <IntroductionBox />
        <SkillBox />
        <CareerBox handleClick={showModal} />
        <EtcBox />
      </MainGridContainer>
      {isOpen && <Modal 
        isUnmount={isUnmount} 
        showModal={showModal} 
        closeModal={closeModal} />}
    </>
  )
}

const MainGridContainer = styled.main`
  width: 80%;
  max-width: 1600px;
  height: 75%;
  max-height: 1000px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  gap: 0.8rem;

  ${media.lg`
    background-color: black;
  `}
  ${media.md`
    background-color: blue;
  `}
  ${media.sm`
    background-color: red;
  `}
`
// Grid item 공통 스타일
export const GridItemBox = styled.div` 
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.4);
  padding: 1rem 1rem;

  transition: transform .4s;

  &:hover{
    transform: scale(1.04);
    z-index: 1;
  }
`

export default GridContainer