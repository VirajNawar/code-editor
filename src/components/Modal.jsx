import React from 'react'
import styled from 'styled-components'
import  {NewFolder, NewPlayground, NewPlaygroundAndFolder, EditFolder, EditPlaygroundTitle, Loading}  from './ModalTypes'



const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    background-color: #fff;
    padding: 0.5rem;
    // display: flex;
    // flex-direction: row;
`

export const Header = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`

export const Heading = styled.h3`
  font-weight: 400;
  span{
    font-weight: 700;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;
  input {
    flex-grow: 1;
    height: 2rem;
  }
  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0.1rem 2rem;
  }
`

const Modal = () => {
  const type = 3;

  // ModalTypes
  // 1: New Folder
  // 2: New Playground
  // 3: New Playground and Folder
  // 4: Rename 
  return (
    <ModalContainer>
      <ModalContent>
        {type === 1 && <NewFolder />}
        {type === 2 && <NewPlayground />}
        {type === 3 && <NewPlaygroundAndFolder />}
        {type === 4 && <EditFolder />}
        {type === 5 && <EditPlaygroundTitle />}
        {type === 6 && <Loading />}


      </ModalContent>
    </ModalContainer>
  )
}

export default Modal