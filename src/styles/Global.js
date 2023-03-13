import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
}

body{
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background-color: #efefef;
    position: relative;
    
}

`;

export default GlobalStyle;
