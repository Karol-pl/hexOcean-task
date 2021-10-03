import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background .2s ease-in-out, color .2s ease-in-out;
}
`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#00284e",
};

export const darkTheme = {
  body: "#00284e",
  text: "#f1f1f1",
};
