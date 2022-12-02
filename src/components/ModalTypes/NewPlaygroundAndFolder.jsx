import React, { useContext, useState } from 'react'
import { Header, CloseButton } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'



import Select from 'react-select';
import styled from 'styled-components';

const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1.2rem;
  align-items: center;
  input {
    flex-grow: 1;
    height: 2rem;
  }

  input{
      border-radius:0.5rem;
      padding:0.5rem;
  }


  button {
    padding: 1rem 11.5rem;
    font-size: 1rem;
    border-radius: 30px;
    display: flex;
    // align-items: center;
    gap: 0.25rem;
    font-family: 'Noto Sans', sans-serif;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    border-style: 1px linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    box-sizing: border-box;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;

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

  
`;

const NewPlaygroundAndFolder = () => {
  const { closeModal } = useContext(ModalContext);
  const { addPlaygroundAndFolder } = useContext(PlaygroundContext);

  const languageOptions = [
    { value: "cpp", label: "cpp" },
    { value: "java", label: "java" },
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
  ];

  const [playgroundName, setPlaygroundName] = useState("")
  const [folderName, setFolderName] = useState("")
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  return (
    <>
      <Header>
        <h2 className='create-new-playground-headaing'>Create New Playground & Create New Folder</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp  />
        </CloseButton>
      </Header>
      <InputWithSelect>
        <label>Enter Folder Name</label>
        <input type='text' onChange={(e) => setFolderName(e.target.value)} />

        <label>Enter Card Name</label>
        <input type='text' onChange={(e) => setPlaygroundName(e.target.value)} />

        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />

        <button onClick={() => {
          addPlaygroundAndFolder(folderName, playgroundName, language.label)
          closeModal();
        }}> Create Playground </button>
      </InputWithSelect>
    </>
  )
}

export default NewPlaygroundAndFolder