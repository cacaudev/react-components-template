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

class Theme {
  private theme: THEMES_AVAILABLE;

  constructor() {
    this.theme = this.getDefault();
  }

  /**
   * Sanitize theme value,
   * if invalid return current default
   * if valid return enum svalue
   * @param themeValue string
   * @returns THEMES
   */
  sanitizeTheme(themeValue: THEMES_AVAILABLE | null): THEMES_AVAILABLE {
    if (!CustomValidator.isStringValid(themeValue)) {
      return this.getDefault();
    }

    let themeString = themeValue as string;
    if (!this.isThemeAvailable(themeString)) {
      return this.getDefault();
    }

    return THEMES_AVAILABLE[themeString as keyof typeof THEMES_AVAILABLE];
  }

  setTheme(theme: THEMES_AVAILABLE) {
    this.theme = this.sanitizeTheme(theme);
  }

  getTheme(): THEMES_AVAILABLE {
    return this.theme;
  }

  getDefault(): THEMES_AVAILABLE {
    return THEMES_AVAILABLE.LIGHT_THEME;
  }

  getThemeName(): string {
    const themeTyped: string = this.theme.toString();
    return THEMES_NAMES[themeTyped as keyof typeof THEMES_NAMES];
  }

  getThemeValue(): string {
    const themeTyped: string = this.theme.toString();
    return THEMES_VALUES[themeTyped as keyof typeof THEMES_VALUES];
  }

  isThemeAvailable(themeValue: string) {
    const themesAvailable = Object.values(THEMES_AVAILABLE).map((item) =>
      item.toString()
    );
    return themesAvailable.includes(themeValue);
  }
}

export { Theme, THEMES_AVAILABLE };
