import Layout from "./layout/layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { dark, getTheme, light, ThemeName } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { ThemeProvider } from "styled-components";

function App() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <BookStoreThemeProvider>
        <ThemeSwitcher />
          <Layout>
            <Home/>
          </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;