interface ILocalStorage {
  getAttributeValue(attributeName: string): string;
  setAttributeValue(attributeName: string, attributeValue: string): void;
}
export default ILocalStorage;
