import React, { useState } from "react";
import styled from "styled-components";
import { GridItemBox } from "../GridContainer";
import { media } from "../../styles/media";

const GitHubBox = () => {
  const [hover, setHover] = useState(false);

  const Box = styled(GridItemBox)`
    grid-column: 4/5;
    grid-row: 1/3;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;

    cursor: pointer;

    ${media.xl`
      grid-column: 1/3;
      grid-row: 7/8;
      gap: 1rem;
    `}

    ${media.md`
      grid-column: 1/5;
      grid-row: 10/11;
    `}
  `;

  return (
    // github 페이지로 이동
    <Box
      onClick={() => window.open("https://github.com/Leeminsu67")}
      onMouseEnter={() => setHover(true)} // 마우스엔터(호버)시 키값이 저장된다
      onMouseLeave={() => setHover(false)} // 마우스리브 시에는 키값이 지워진다
    >
      <img src="img/git-hub.png" alt="githubImg" style={{ width: "200px" }} />
      {/* a태그를 hover 한 것처럼 하기 위해 */}
      <AString hover={hover}>github.com/Leeminsu67</AString>
      <HeadingTitle>
        <span>소스코드 저장소 </span>입니다.
      </HeadingTitle>
      <ListBox>
        <ListItem>과거 프로젝트, 프로그램, 앱의 소스 코드</ListItem>
      </ListBox>
    </Box>
  );
};

const HeadingTitle = styled.div`
  span {
    font-weight: 600;
    font-size: 18px;
  }
`;

const AString = styled.div`
  color: #258ddb;
  text-decoration: ${(props) => (props.hover ? "underline" : "none")};
`;

const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  list-style-type: disc;
`;

const ListItem = styled.li`
  position: relative;
  margin-left: 1rem;

  &::after {
    content: "";
    color: black;
    font-size: 1rem;
  }
`;

export default GitHubBox;
