import ILocalStorage from "@domain/interfaces/localStorage/ILocalStorage";

class StorageService implements ILocalStorage {
  getAttributeValue(attributeName: string): string {
    const attributeValue: string | null = localStorage.getItem(attributeName);
    return attributeValue ? attributeValue.toString() : "";
  }
  setAttributeValue(attributeName: string, attributeValue: string): void {
    localStorage.setItem(attributeName, attributeValue);
  }
}

export { StorageService };
