import { Theme, THEMES_AVAILABLE } from "@domain/contexts/support/theme/Theme";
import { ThemeStorageHandlerComposer } from "@state/storage/ThemeStorage.composer";
import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: THEMES_AVAILABLE;
  toggleTheme: () => void;
}
interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>({
  theme: new Theme().getDefault(),
  toggleTheme: () => {},
});

const defaultTheme = ThemeStorageHandlerComposer.getCurrentTheme();

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = (theme: THEMES_AVAILABLE) => {
    ThemeStorageHandlerComposer.setTheme(theme);
  };

  const toggleTheme = () => {
    let newTheme = theme;
    if (theme === THEMES_AVAILABLE.DARK_THEME) {
      newTheme = THEMES_AVAILABLE.LIGHT_THEME;
    } else if (theme === THEMES_AVAILABLE.LIGHT_THEME) {
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
  });

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
