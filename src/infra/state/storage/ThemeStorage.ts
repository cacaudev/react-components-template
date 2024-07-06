import { ThemeManager, THEMES_AVAILABLE } from "@domain/style/ThemeManager";

class ThemeStorage {
  private static THEME_STORAGE_ATTRIBUTE = "theme";

  static getCurrentTheme(): THEMES_AVAILABLE {
    const themeLocal: string | null = localStorage.getItem(
      this.THEME_STORAGE_ATTRIBUTE
    );
    const themeSanitized = ThemeManager.sanitizeTheme(themeLocal as THEMES_AVAILABLE);
    return themeSanitized;
  }

  static setTheme(themeValue: THEMES_AVAILABLE): void {
    localStorage.setItem(this.THEME_STORAGE_ATTRIBUTE, themeValue);
  }
}

export { ThemeStorage };
