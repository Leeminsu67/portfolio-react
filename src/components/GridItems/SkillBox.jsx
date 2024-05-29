import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';
import { skillsData } from '../../data/skillsData';

const SkillBox = () => {
  const Box = styled(GridItemBox)`
    grid-column: 4/5;
    grid-row: 3/5;
    overflow-y: auto;
  `

  return (
    <Box>
      <Title>Skills</Title>
      <ContentBox>
        {skillsData.map((skill)=>(
          <Content borderColor={skill.borderColor}>
            <ContentHeading color={skill.color}>
              {skill.title}
            </ContentHeading>
            {skill.badge.map((str)=> <img src={str} alt='bageimg' />)}
          </Content>
        ))}
      </ContentBox>
    </Box>
  );
}

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  padding: 10px 0;
`

const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-top: 2rem;
`

const ContentHeading = styled.div`
  position: absolute;
  top: -1.7rem;
  left: 0;
  font-size: 1.4rem;
  color: ${(props)=> props.color ? props.color : '#ba68c8'};
`

const Content = styled.div`
  position: relative;
  border: 1px solid ${(props)=> props.borderColor ? props.borderColor : '#ccc'};
  border-radius: 4px;
  padding: 8px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`

export default SkillBox