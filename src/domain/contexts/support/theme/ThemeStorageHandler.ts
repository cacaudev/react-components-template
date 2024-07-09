import ILocalStorage from "@domain/interfaces/localStorage/ILocalStorage";
import { Theme, THEMES_AVAILABLE } from "./Theme";

/**
 * Handle theme change on storage from browser
 */
class ThemeStorageHandler {
  constructor(private localStorage: ILocalStorage) {}

  private static THEME_STORAGE_ATTRIBUTE = "theme";

  getCurrentTheme(): THEMES_AVAILABLE {
    const themeLocal: string | null = this.localStorage.getAttributeValue(
      ThemeStorageHandler.THEME_STORAGE_ATTRIBUTE
    );
    const aTheme = new Theme();
    aTheme.setTheme(themeLocal as THEMES_AVAILABLE);
    return aTheme.getTheme();
  }

  setTheme(themeValue: THEMES_AVAILABLE): void {
    const aTheme = new Theme();
    aTheme.setTheme(themeValue);

    this.localStorage.setAttributeValue(
      ThemeStorageHandler.THEME_STORAGE_ATTRIBUTE,
      aTheme.getThemeValue()
    );
  }
}

export { ThemeStorageHandler };
