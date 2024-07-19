class CustomValidator {
  static isValueValid = (value: any): boolean => value !== null && value !== undefined;
  static isStringValid = (value: any): boolean =>
    value !== null && value !== undefined && value !== "";
}

export { CustomValidator };
