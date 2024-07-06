import { ThemeManager, THEMES_AVAILABLE } from "@domain/style/ThemeManager";
import { ThemeStorage } from "@state/storage/ThemeStorage";
import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: THEMES_AVAILABLE;
  toggleTheme: () => void;
}
interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>({
  theme: ThemeManager.getDefault(),
  toggleTheme: () => {},
});

const defaultTheme = ThemeStorage.getCurrentTheme();

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = (theme: THEMES_AVAILABLE) => {
    ThemeStorage.setTheme(theme);
  };

  const toggleTheme = () => {
    let newTheme = theme;
    if (theme == THEMES_AVAILABLE.DARK_THEME) {
      newTheme = THEMES_AVAILABLE.LIGHT_THEME;
    } else if (theme == THEMES_AVAILABLE.LIGHT_THEME) {
      newTheme = THEMES_AVAILABLE.DARK_THEME;
    }

    /**
     * Update theme stage and theme on local storage
     */
    setTheme(newTheme);
    handleThemeChange(newTheme);
  };

  /**
   * Set default theme on provider component mount
   */
  useEffect(() => {
    handleThemeChange(theme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
