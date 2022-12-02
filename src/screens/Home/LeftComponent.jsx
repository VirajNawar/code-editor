import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import {ModalContext} from '../../context/ModalContext'

const StyledLeftComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #0E051A;

    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentContainer = styled.div`
    text-align: center;
`

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
`

const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 0.75rem;
    font-family: 'Raleway', sans-serif;
    span{
        font-weight: 700;
    }
`
const SubHeading = styled.div`
    font-size: 1.5rem;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 1.5rem;
    font-family: 'Noto Sans', sans-serif;
`

const AddPlayground = styled.button`
    padding: 0.25rem 1.5rem;
    font-size: 1rem;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: 'Noto Sans', sans-serif;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    border-style: none;
    box-sizing: border-box;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    span{
        font-size: 2rem;
        font-weight: 700;
    }

    &:hover{
        cursor: pointer;
        border:none;
        background-color: transparent;
        color:#FFFF;
        background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        box-shadow: rgba(80, 63, 205, 0.5) 0 1px 27px;
        transition-duration: .1s;

}
    }
`
const LeftComponent = () => {

    const { openModal } = useContext(ModalContext)
    return (
        <StyledLeftComponent>
        <ContentContainer>
            <Logo src={logo} alt="" />
            <MainHeading> <span>Code</span> Deck</MainHeading>
            <SubHeading>Code. Compile. Debug.</SubHeading>
            <AddPlayground onClick={() => openModal({
                show: true,
                modalType: 3,
                identifiers: {
                    folderId: "",
                    cardId: "",
                }
            })} ><span>+</span> Create New Playground</AddPlayground>
        </ContentContainer>
    </StyledLeftComponent>
    )
}

export default LeftComponent