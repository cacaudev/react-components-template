import { THEMES_AVAILABLE } from "@domain/contexts/theme/Theme";
import { LogoDarkSmall, LogoLightSmall, LogoDark, LogoLight } from "@img/logos";
import { useThemeContext } from "@state/context/ThemeContext";
import { ScreenManager } from "@state/hooks/screen/ScreenManager";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopNavbarLogo: React.FC = () => {
  const navigateToPage = useNavigate();
  const { theme } = useThemeContext();
  const { isTablet } = ScreenManager();

  const setLogo = () => {
    if (isTablet) {
      if (theme.getTheme() === THEMES_AVAILABLE.DARK_THEME) {
        return LogoDarkSmall;
      } else {
        return LogoLightSmall;
      }
    } else {
      if (theme.getTheme() === THEMES_AVAILABLE.DARK_THEME) {
        return LogoDark;
      } else {
        return LogoLight;
      }
    }
  };

  return (
    <a onClick={() => navigateToPage("/")}>
      <img src={setLogo()} />
    </a>
  );
};

export { TopNavbarLogo };
