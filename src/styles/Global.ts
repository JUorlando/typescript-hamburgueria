import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-text: #333333;
    --color-text-in-primary: #828282;
    --color-text-complement: #E0E0E0;
    --color-text-light: #F5F5F5;
    --color-red: #B4423E; 
    --color-secondary: #EB5757;
    --color-information: #155BCB;
    --color-success: #168821;
    --color-warning: #FFCD07;
    --color-error: #E60000;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-grey-4);
    color: var(--color-grey-0);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  a{
        color: unset;
        text-decoration: none;
    }
  ul, ol, li{
        list-style: none;
    }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: var(--color-grey-0);
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-grey-1);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-2);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-4);
  }
`;
