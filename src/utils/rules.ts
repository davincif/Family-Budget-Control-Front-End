import { ValidationRule } from 'quasar';

import { isPasswordValid } from 'src/core/LoginCore';
import { PasswordErrroEnum } from 'src/models/core/PasswordErrorEnum';

export type TranslateFunc = (label: string) => string;

let translate: TranslateFunc;

/**
 *
 * @param translateFunc
 */
export function initRules(translateFunc: TranslateFunc) {
  translate = translateFunc;
}

/**
 * Check if the password matches the business rules
 * @param val the password to check
 * @returns '' for success, error Label for translation otherwise
 */
export const passwordRule: ValidationRule = (val) => {
  let msg: string | true = true;
  let label: string;

  const passError = isPasswordValid(val);
  switch (passError) {
    case PasswordErrroEnum.EMPTY:
      label = 'REQUIRED';
      msg = translate ? translate(label) : label;
      break;

    case PasswordErrroEnum.TOOSHORT:
      label = 'INVALID';
      msg = translate ? translate(label) : label;
      break;
  }

  return msg;
};
