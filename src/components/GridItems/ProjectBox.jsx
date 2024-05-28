import React from 'react'
import styled from 'styled-components';
import { GridItemBox } from '../GridContainer';
import { useNavigate } from 'react-router-dom';

// 일괄적인 박스 스타일을 props로 받아온 다음 나머지 grid 속성을 부여
const ProjectBox = () => {
  const navigate = useNavigate();

  const Box = styled(GridItemBox)`
    grid-column: 1/2;
    grid-row: 1/4;

    cursor: pointer;
  `
  const projectBoxClickHandler = ()=>{
    navigate('/project')
  }
  return (
    <Box onClick={projectBoxClickHandler}>ProjectBox</Box>
  );
}

export default ProjectBox