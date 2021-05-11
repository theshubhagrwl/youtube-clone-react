import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const CThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default CThemeProvider;
