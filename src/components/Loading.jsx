import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader>
        <LoaderText>Loading...</LoaderText>
        <LoaderBar></LoaderBar>
      </Loader>
    </LoadingContainer>
  );
}

const LoaderBarAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
`

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LoaderText = styled.div`
  font-size: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
  align-self: center;
`

const LoaderBar = styled.div`
  width: 30%;
  height: 10px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0);
  animation: ${LoaderBarAnimation} 2s ease-in-out infinite;
`
  
export default Loading