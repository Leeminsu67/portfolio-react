import React from 'react'
import styled from 'styled-components'

const Title = ({title}) => {
  return <Head>{title}</Head>
}

const Head = styled.div`
  padding-bottom: 0.5rem;
  font-weight: 800;
  font-size: 2.5rem;
  color: #222;
  text-align: center;
`

export default Title