import React from "react";
import styled from "styled-components";
import { GridItemBox } from "../GridContainer";
import { skillsData } from "../../data/skillsData";
import { media } from "../../styles/media";

const SkillBox = () => {
  const Box = styled(GridItemBox)`
    grid-column: 4/5;
    grid-row: 3/5;
    overflow-y: auto;

    ${media.xl`
      grid-column: 3/5;
      grid-row: 4/6;
    `}

    ${media.md`
      grid-column: 1/5;
      grid-row: 4/6;
    `}
  `;

  return (
    <Box>
      <Title>Skills</Title>
      <ContentBox>
        {skillsData.map((skill) => (
          <Content borderColor={skill.borderColor}>
            <ContentHeading color={skill.color}>{skill.title}</ContentHeading>
            {skill.badge.map((str) => (
              <img src={str} alt="bageimg" />
            ))}
          </Content>
        ))}
      </ContentBox>
    </Box>
  );
};

const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  padding: 10px 0;
`;

const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-top: 2rem;

  ${media.md`
    margin-top: 3rem;
    gap: 2.4rem;
  `}
`;

const ContentHeading = styled.div`
  position: absolute;
  top: -1.7rem;
  left: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => (props.color ? props.color : "#ba68c8")};

  ${media.df`
    font-size: 1.2rem;
    top: -1.5rem;
  `}

  ${media.md`
    top: -1.7rem;
    font-size: 1.4rem;
  `}
`;

const Content = styled.div`
  position: relative;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "#ccc")};
  border-radius: 4px;
  padding: 8px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

export default SkillBox;
