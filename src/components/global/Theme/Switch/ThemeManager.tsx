import React, { useEffect, useState } from "react";
import { useThemeContext } from "@state/context/ThemeContext";
import { THEMES_AVAILABLE } from "@domain/contexts/theme/Theme";
import { ThemeToggleButton } from "../ToggleButton/ThemeToggleButton";

const ThemeManager: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [themeChecked, setThemeChecked] = useState(false);

  useEffect(() => {
    manageCurrentTheme();
  }, []);

  /**
   * Set toggle button accordingly to current theme persisted on store
   */
  const manageCurrentTheme = () => {
    setThemeChecked(!(theme.getTheme() == THEMES_AVAILABLE.DARK_THEME));
  };

  const handleToogleTheme = (checked: boolean = false) => {
    setThemeChecked(theme.getTheme() == THEMES_AVAILABLE.DARK_THEME);
    toggleTheme();
  };

  return <ThemeToggleButton checked={themeChecked} onChange={handleToogleTheme} />;
};

export { ThemeManager };
