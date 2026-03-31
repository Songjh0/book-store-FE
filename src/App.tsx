import Layout from "./layout/layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
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