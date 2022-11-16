import { PasswordErrroEnum } from 'src/models/core/PasswordErrorEnum';

const passwordRules = {
  minSize: 6,
};

/**
 * Teste if the password is valid or not
 * @param password the password to be tested
 * @returns which was the error found in the password, if any
 */
export function isPasswordValid(password: string): PasswordErrroEnum {
  if (!password) {
    return PasswordErrroEnum.EMPTY;
  } else if (password.length < passwordRules.minSize) {
    return PasswordErrroEnum.TOOSHORT;
  }

  return PasswordErrroEnum.NO_ERROR;
}
