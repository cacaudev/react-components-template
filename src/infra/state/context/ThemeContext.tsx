import { Theme, THEMES_AVAILABLE } from "@domain/contexts/support/theme/Theme";
import { ThemeStorageHandlerComposer } from "@state/storage/ThemeStorage.composer";
import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: Theme,
  toggleTheme: () => void;
}
interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>({
  theme: Theme.newDefault(),
  toggleTheme: () => {},
});

const defaultTheme = ThemeStorageHandlerComposer.getCurrentTheme();

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = (theme: Theme) => {
    ThemeStorageHandlerComposer.setTheme(theme);
  };

  const toggleTheme = () => {    
    let newTheme = Theme.newDefault();

    if (theme.getTheme() === THEMES_AVAILABLE.DARK_THEME) {
      newTheme = Theme.newTheme(THEMES_AVAILABLE.LIGHT_THEME);
    } else if (theme.getTheme() === THEMES_AVAILABLE.LIGHT_THEME) {
      newTheme = Theme.newTheme(THEMES_AVAILABLE.DARK_THEME);
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
