import React, { useContext } from 'react'
import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'
import { BiEditAlt } from 'react-icons/bi'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'



const StyledRightComponent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;
    height: 100vh;
    font-family: 'Noto Sans', sans-serif;

`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`

const Heading = styled.h3`
  font-size: ${props => props.size === 'small' ? "1.25rem" : "1.75rem"};
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  span{
    font-weight: 700;
  }
`

const AddFolder = styled.div`
    font-size: 1rem;
    border-radius: 30px;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 1.5rem;
        font-weight: 700;
    }

    &:hover{
        cursor: pointer;
    }
`

const FolderCard = styled.div`
    margin-bottom: 1rem;
`

const FolderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
   
`

const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`

const Card = styled.div`
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    background-color: #331a4a;
    color:#FFFF;
    transition: all .2s ease-in-out;

    &:hover{
      transform: scale(1.05); 
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    }

`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardContent = styled.div`
`


const Logo = styled.img`
    width: 70px;
    height:50px;
    margin-right: 1rem;
`
const RightComponent = () => {

  const navigate = useNavigate()

  const {openModal} = useContext(ModalContext)
  const {folders, deleteFolder, deleteCard} = useContext(PlaygroundContext)

   return (
    <StyledRightComponent>
      <Header>
        <Heading size="large">
          My <span>Playground</span>
        </Heading>
        <AddFolder onClick={() => openModal({
          show: true,
          modalType: 1,
          identifiers: {
            folderId: "",
            cardId: "",
          }
        })}> <span>+</span> New Folder</AddFolder>
      </Header>
      <hr />

      {
         Object.entries(folders).map(([folderId, folder]) => (
          <FolderCard key={folderId}>
            <Header>
              <Heading size="small">
                {folder.title}
              </Heading>
              <FolderIcons>
                <IoTrashOutline onClick={() => deleteFolder(folderId)} />
                <BiEditAlt onClick={() => openModal({
                  show: true,
                  modalType: 4,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })} />
                <AddFolder onClick={() => openModal({
                  show: true,
                  modalType: 2,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })}><span>+</span> New Playground</AddFolder>
              </FolderIcons>
            </Header>

            <PlayGroundCards>
              {
               Object.entries(folder['playgrounds']).map(([playgroundId, playground]) => (
                <Card key={playgroundId} onClick={() => {
                  navigate(`/playground/${folderId}/${playgroundId}`)
                }}>
                  <CardContainer>
                    <Logo src={logo} />
                    <CardContent>
                      <p>{playground.title}</p>
                      <p>Language: {playground.language}</p>
                    </CardContent>
                  </CardContainer>
                  <FolderIcons onClick={(e) => {
                    e.stopPropagation(); //stop click propagation from child to parent
                  }}>
                    <IoTrashOutline onClick={() => deleteCard(folderId, playgroundId)} />
                    <BiEditAlt onClick={() => openModal({
                      show: true,
                      modalType: 5,
                      identifiers: {
                        folderId: folderId,
                        cardId: playgroundId,
                      }
                    })} />
                    </FolderIcons>
                  </Card>
                ))
              }
            </PlayGroundCards>
          </FolderCard>
        ))
      }
    </StyledRightComponent>
  )
}

export default RightComponent;