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

const DEFAULT_THEME = THEMES_AVAILABLE.LIGHT_THEME;

class Theme {
  private theme: THEMES_AVAILABLE = DEFAULT_THEME;

  private constructor() {}

  public static newDefault(): Theme {
    return new Theme();
  }

  public static newTheme(theme: THEMES_AVAILABLE) {
    const aTheme = new Theme();
    aTheme.theme = Theme.sanitizeTheme(theme);
    return aTheme;
  }

  private static isThemeAvailable(themeValue: string) {
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
  private static sanitizeTheme(themeValue: THEMES_AVAILABLE | null): THEMES_AVAILABLE {
    if (!CustomValidator.isStringValid(themeValue)) {
      return Theme.newDefault().getTheme();
    }

    let themeString = themeValue as string;
    if (!Theme.isThemeAvailable(themeString)) {
      return Theme.newDefault().getTheme();
    }

    return THEMES_AVAILABLE[themeString as keyof typeof THEMES_AVAILABLE];
  }

  getTheme(): THEMES_AVAILABLE {
    return this.theme;
  }

  getThemeName(): string {
    const themeTyped: string = this.theme.toString();
    return THEMES_NAMES[themeTyped as keyof typeof THEMES_NAMES];
  }

  getThemeValue(): string {
    const themeTyped: string = this.theme.toString();
    return THEMES_VALUES[themeTyped as keyof typeof THEMES_VALUES];
  }
}

export { Theme, THEMES_AVAILABLE };
