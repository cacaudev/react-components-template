import { DEFAULT_THEME, THEMES_AVAILABLE } from "@domain/style/theme/Theme";
import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string;
  setTheme: () => void;
}
interface Props {
  children: React.ReactNode;
}

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  const themesAvailable = Object.values(THEMES_AVAILABLE).map((item) =>
    item.toString()
  );

  if (!theme || themesAvailable.includes(theme)) {
    localStorage.setItem("theme", DEFAULT_THEME);
    return DEFAULT_THEME;
  } else {
    return theme;
  }
};

const ThemeContext = createContext<IThemeContext>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  const changeThemeOnLocalStorage = () => {
    localStorage.setItem("theme", theme);
  };

  const handleThemeState = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    changeThemeOnLocalStorage();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: handleThemeState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
