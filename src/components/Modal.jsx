import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { ZoomIn, ZoomOut } from '../styles/animation';

const Modal = ({ isUnmount, showModal, closeModal }) => {
  const backgroundRef = useRef();

  const modalBgClickHandler = (e) => {
    if (e.target === backgroundRef.current) {
      closeModal();
    }
  }
  return (
    <Background 
      ref={backgroundRef} 
      onClick={(e)=>modalBgClickHandler(e)}
      mount={isUnmount}
      >
      <ModalMainBox>
        기본적으로는
      </ModalMainBox>
    </Background>
  )
}

const ModalMainBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;

  box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.4);
`

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;

  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  animation: ${(props) => props.mount ? ZoomIn : ZoomOut} 0.6s ease-in-out;
`

export default Modal