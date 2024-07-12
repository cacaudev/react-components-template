import ILocalStorage from "@domain/interfaces/localStorage/ILocalStorage";
import { Theme, THEMES_AVAILABLE } from "./Theme";

/**
 * Handle theme change on storage from browser
 */
class ThemeStorageHandler {
  constructor(private storage: ILocalStorage) {}

  private static THEME_STORAGE_ATTRIBUTE = "theme";

  getCurrentTheme(): Theme {
    const themeLocal: string | null = this.storage.getAttributeValue(
      ThemeStorageHandler.THEME_STORAGE_ATTRIBUTE
    );    
    return Theme.newTheme(themeLocal as THEMES_AVAILABLE);
  }

  setTheme(theme: Theme): void {    
    this.storage.setAttributeValue(
      ThemeStorageHandler.THEME_STORAGE_ATTRIBUTE,
      theme.getTheme()
    );
  }
}

export { ThemeStorageHandler };
