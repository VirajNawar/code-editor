import React, { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import { BiEditAlt, BiImport, BiExport } from 'react-icons/bi'
import { ModalContext } from '../../context/ModalContext'
import Select from 'react-select'
import { languageMap } from '../../context/PlaygroundContext'

const StyledEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans', sans-serif;

`

const UpperToolBar = styled.div`
  background: #fff;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
`

const SelectBars = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > div{
    width: 10rem;
  }
`
const Button = styled.button`
  padding: 0.6rem 1rem;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  font-family: 'Noto Sans', sans-serif;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    height: 2.5rem;
    color: white;
    padding: 0.1rem 2rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    border:none;
    box-sizing: border-box;
    border-radius: 30px;

    &:hover{
        cursor: pointer;
        border: solid #0E051A;
        background: white;
        color:#181818;
        box-shadow: rgba(80, 63, 205, 0.5) 0 1px 27px;
        transition-duration: .1s;
  
  }
`
const LowerToolBar = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  input{
    display: none;
  }
  label, a{
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: black;
  }
`

const EditorContainer = ({
    title,
    currentLanguage,
    setCurrentLanguage,
    currentCode,
    setCurrentCode,
    folderId,
    playgroundId,
    saveCode,
    runCode,
    getFile,
}) => {

    const { openModal } = useContext(ModalContext)
    const themeOptions = [
        { value: 'githubDark', label: 'githubDark' },
        { value: 'githubLight', label: 'githubLight' },
        { value: 'bespin', label: 'bespin' },
        { value: 'duotoneDark', label: 'duotoneDark' },
        { value: 'duotoneLight', label: 'duotoneLight' },
        { value: 'dracula', label: 'dracula' },
        { value: 'xcodeDark', label: 'xcodeDark' },
        { value: 'xcodeLight', label: 'xcodeLight' },
        { value: 'vscodeDark', label: 'vscodeDark' },
        { value: 'vscodeLight', label: 'vscodeLight' },
        { value: 'okaidia', label: 'okaidia' },
    ]

    const languageOptions = [
        { value: 'cpp', label: 'cpp' },
        { value: 'javascript', label: 'javascript' },
        { value: 'java', label: 'java' },
        { value: 'python', label: 'python' },
    ]

    const handleThemeChange = (selectedOption) => {
        setCurrentTheme(selectedOption)
    }

    const handleLanguageChange = (selectedOption) => {
        setLanguage(selectedOption)
        setCurrentLanguage(selectedOption.value)
        setCurrentCode(languageMap[selectedOption.value].defaultCode)
    }

    const [currentTheme, setCurrentTheme] = useState({ value: 'githubDark', label: 'githubDark' })
    const [language, setLanguage] = useState(() => {
        for (let i = 0; i < languageOptions.length; i++) {
            if (languageOptions[i].value === currentLanguage) {
                return languageOptions[i]
            }
        }
        return languageOptions[0];
    })

    return (
        <StyledEditorContainer>
            <UpperToolBar>
                <Title>
                    <h3>{title}</h3>
                    <BiEditAlt onClick={() => openModal({
                        show: true,
                        modalType: 5,
                        identifiers: {
                            folderId: folderId,
                            cardId: playgroundId,
                        }
                    })} />
                </Title>
                <SelectBars>
                    <Button onClick={saveCode}>Save code</Button>
                    <Select
                        options={languageOptions}
                        value={language}
                        onChange={handleLanguageChange}
                    />
                    <Select
                        options={themeOptions}
                        value={currentTheme}
                        onChange={handleThemeChange}
                    />
                </SelectBars>
            </UpperToolBar>
            <CodeEditor
                currentLanguage={currentLanguage}
                currentTheme={currentTheme.value}
                currentCode={currentCode}
                setCurrentCode={setCurrentCode}
            />
            <LowerToolBar>
                <label htmlFor="codefile">
                    <input type="file" accept="." id="codefile" onChange={(e) => getFile(e, setCurrentCode)} /> <BiImport /> Import Code
                </label>

                <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentCode)}`} download="code.txt">
                    <BiExport /> Export Code
                </a>
                <Button onClick={runCode}>Run Code</Button>
            </LowerToolBar>
        </StyledEditorContainer >
    )
}

export default EditorContainer