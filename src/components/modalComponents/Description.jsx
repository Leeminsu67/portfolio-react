import React from 'react'
import styled from 'styled-components'

const Description = ({label, value}) => {
  return (
    // <DescriptionWrap className="projects__description__wrap">
    <DescriptionWrap>
      <div className="projects_label">
        {label}
      </div>
      <div className="Projects_value">
        {value}
      </div>
    </DescriptionWrap>
  )
}

const DescriptionWrap = styled.div`
  /* 자세히보기 버튼 하단 */
  margin-bottom: 1rem;

  .projects_label{
    display: inline-block;
    vertical-align: top;
    width: 8.4rem;
    font-weight: 900;
    font-size: 1rem;

    &::before {
      content: "✔";
      display: inline;
      padding-right: .5rem;
    }
  }

  .Projects_value{
    display: inline-block;
    vertical-align: bottom;
    width: calc(100% - 8.4rem);
    font-weight: 400;
    font-size: 1rem;
  }
`

export default Description