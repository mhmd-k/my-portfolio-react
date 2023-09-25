import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext("dark");

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty("--box-color", "white");
      document.documentElement.style.setProperty("--box-shadow", "#e0e0e0");
      document.documentElement.style.setProperty("--title-color", "#202020");
      document.documentElement.style.setProperty("--text-color", "#575f64");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#202020");
      document.documentElement.style.setProperty("--box-color", "#343434");
      document.documentElement.style.setProperty("--box-shadow", "#202020");
      document.documentElement.style.setProperty("--title-color", "white");
      document.documentElement.style.setProperty("--text-color", "#9e9e9e");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const handleChangeTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
