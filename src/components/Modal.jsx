import React, { useContext } from 'react'
import styled from 'styled-components'
import { NewFolder, NewPlayground, NewPlaygroundAndFolder, EditFolder, EditPlaygroundTitle, Loading } from './ModalTypes'
import { ModalContext } from '../context/ModalContext'


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
    background-color: #0E051A;
    color:#FFFF;
    padding: 1.5rem;
    // display: flex;
    // flex-direction: row;
    border-radius:1rem;
    font-family: 'Noto Sans', sans-serif;
`

export const Header = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.25rem;
  margin-bottom: 0.75rem;
  font-family: 'Raleway', sans-serif;
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
  margin-left:0.5rem;
  color:#FFFF;
  
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
    border-radius: 10px;

  }
  button {
    font-family: 'Noto Sans', sans-serif;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    height: 2.5rem;
    color: white;
    padding: 0.1rem 2rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    color:#181818;
    box-sizing: border-box;
    border-radius: 30px;


    &:hover{
      cursor: pointer;
      border: solid #0E051A;
      background-color: transparent;
      color:#FFFF;
      background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
      box-shadow: rgba(80, 63, 205, 0.5) 0 1px 27px;
      transition-duration: .1s;

}
  }

`

const Modal = () => {
  const { isOpenModal } = useContext(ModalContext)
  const { modalType } = isOpenModal;
  // ModalTypes
  // 1: New Folder
  // 2: New Playground
  // 3: New Playground and Folder
  // 4: Rename Folder
  // 5: Rename Playground
  return (
    <ModalContainer>
      <ModalContent>
        {modalType === 1 && <NewFolder />}
        {modalType === 2 && <NewPlayground />}
        {modalType === 3 && <NewPlaygroundAndFolder />}
        {modalType === 4 && <EditFolder />}
        {modalType === 5 && <EditPlaygroundTitle />}
        {modalType === 6 && <Loading />}


      </ModalContent>
    </ModalContainer>
  )
}

export default Modal