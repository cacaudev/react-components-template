import { CustomValidator } from "@domain/utils/CustomValidator";

enum THEMES_AVAILABLE {
  DARK_THEME = "DARK_THEME",
  LIGHT_THEME = "LIGHT_THEME",
}

/**
 * Theme values used on css rules
 */
enum THEMES_VALUES {
  DARK_THEME = "dark-theme",
  LIGHT_THEME = "light-theme",
}

/**
 * Theme names readable to user
 */
enum THEMES_NAMES {
  DARK_THEME = "Dark Theme",
  LIGHT_THEME = "Light Theme",
}

class ThemeManager {
  static getDefault(): THEMES_AVAILABLE {
    return THEMES_AVAILABLE.LIGHT_THEME;
  }

  static getThemeName(theme: THEMES_AVAILABLE): string {
    const themeTyped: string = theme.toString();
    return THEMES_NAMES[themeTyped as keyof typeof THEMES_NAMES];
  }

  static getThemeValue(theme: THEMES_AVAILABLE): string {
    const themeTyped: string = theme.toString();
    return THEMES_VALUES[themeTyped as keyof typeof THEMES_VALUES];
  }

  static isThemeAvailable(themeValue: string) {
    const themesAvailable = Object.values(THEMES_AVAILABLE).map((item) =>
      item.toString()
    );
    return themesAvailable.includes(themeValue);
  }

  /**
   * Sanitize theme value,
   * if invalid return current default
   * if valid return enum svalue
   * @param themeValue string
   * @returns THEMES
   */
  static sanitizeTheme(themeValue: THEMES_AVAILABLE | null): THEMES_AVAILABLE {
    if (!CustomValidator.isStringValid(themeValue)) {
      return ThemeManager.getDefault();
    }

    let themeString = themeValue as string;
    if (!ThemeManager.isThemeAvailable(themeString)) {
      return ThemeManager.getDefault();
    }

    return THEMES_AVAILABLE[themeString as keyof typeof THEMES_AVAILABLE];
  }
}

export { ThemeManager, THEMES_AVAILABLE };
