import React, { useState } from "react";
import DishForm from "./DishForm";
import Utils from "./Utils";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "../theme/Theme";
import { ThemeButton, TopBar, Title } from "../style/App.style";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <TopBar>
          <Title>Hexocean's form</Title>
          <ThemeButton onClick={toggleTheme}></ThemeButton>
        </TopBar>
        <DishForm />
        <Utils />
      </>
    </ThemeProvider>
  );
};

export default App;
