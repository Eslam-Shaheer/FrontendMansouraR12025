import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("Eslam");
  return (
    <ThemeContext value={{ name, setName, theme, setTheme }}>
      {children}
    </ThemeContext>
  );
};

export default ThemeContext;
