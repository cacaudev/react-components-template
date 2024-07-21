import React, { useEffect, useState } from "react";
import { useThemeContext } from "@state/context/ThemeContext";
import { THEMES_AVAILABLE } from "@domain/contexts/theme/Theme";
import { ThemeToggleButton } from "./ToggleButton/ThemeToggleButton";

/**
 * Responsible for:
 * the theme button state logic,
 * bridge between theme domain logic and react context api state
 */
const ThemeManager: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [themeChecked, setThemeChecked] = useState(false);

  /**
   * On component mount cicle fase adjust button to current theme
   */
  useEffect(() => {
    manageCurrentTheme();
  }, []);

  /**
   * Set toggle button accordingly to current theme persisted on store
   */
  const manageCurrentTheme = () => {
    setThemeChecked(!(theme.getTheme() == THEMES_AVAILABLE.DARK_THEME));
  };

  const handleToogleTheme = () => {
    setThemeChecked(theme.getTheme() == THEMES_AVAILABLE.DARK_THEME);
    toggleTheme();
  };

  return (
    <ThemeToggleButton checked={themeChecked} onChange={handleToogleTheme} />
  );
};

export { ThemeManager };
