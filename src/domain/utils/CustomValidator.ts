class CustomValidator {
  static isValueValid = (value: any): boolean => value != null && value != undefined;
  static isStringValid = (value: string): boolean =>
    value != null && value != undefined && value != "";
}

export { CustomValidator };
