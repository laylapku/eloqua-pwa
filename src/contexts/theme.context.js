import React, { createContext, useState, useLayoutEffect } from "react";
import { lightTheme, darkTheme } from "./themePalettes";

export const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => {}
});

const ThemeContextProvider = ({ children }) => {
  // keeps state of the current chosen theme
  const [dark, setDark] = useState(localStorage.getItem("darkTheme"));

  const toggleTheme = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";
    setDark(!dark);
    localStorage.setItem("darkTheme", !dark);
  };

  const applyTheme = theme => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === "false") {
      setDark(false);
      applyTheme(lightTheme);
    }
    // if state changes, repaints the app
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
