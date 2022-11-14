import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }

    .delete:hover{
        color:#E80000;
        transition-duration: .1s;
       }

       .edit:hover{
         color:#0081CB;
        transition-duration: .1s;
       }
`