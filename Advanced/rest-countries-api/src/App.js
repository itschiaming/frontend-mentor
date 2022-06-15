import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import Layout from "./pages/Layout/Layout";
import React, { useState } from "react";

export const ThemeContext = React.createContext();

const theme = {
  light: {
    foreground: "hsl(200, 15%, 8%)",
    background: "hsl(0, 0%, 98%)",
    elementsBackground: "hsl(0, 0%, 100%)",
  },
  dark: {
    foreground: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
    elementsBackground: "hsl(209, 23%, 22%)",
  },
};

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
    document.querySelector("body").classList.toggle("darkBody");
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: darkTheme,
        toggleDarkMode: toggleDarkMode,
        theme: theme,
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Country />} />
        </Routes>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
