import { ValidationRule } from 'quasar';

import { isPasswordValid } from 'src/core/LoginCore';
import { isBirthdayValid } from 'src/core/RegisterCore';
import { BirthdayErrorEnum } from 'src/models/core/BirthdayErrorEnum';
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
  let label: string | undefined;

  const foundError = isPasswordValid(val);
  switch (foundError) {
    case PasswordErrroEnum.EMPTY:
      label = 'REQUIRED';
      break;

    case PasswordErrroEnum.TOOSHORT:
      label = 'INVALID';
      break;
  }

  if (label) {
    msg = translate ? translate(label) : label;
  }
  return msg;
};

/**
 * check if the given date matches the business rules for a birthday
 * @param val Birthday to check
 * @returns '' for success, error Label for translation otherwise
 */
export const birthdayRule: ValidationRule = (val) => {
  let msg: string | true = true;
  let label: string | undefined;

  const foundError = isBirthdayValid(val);
  switch (foundError) {
    case BirthdayErrorEnum.EMPTY:
      label = 'REQUIRED';
      break;

    case BirthdayErrorEnum.INVALID_DATE:
      label = 'INVALID_DATE';
      break;

    case BirthdayErrorEnum.IN_THE_FUTURE:
      label = 'FUTURE_DATE';
      break;

    case BirthdayErrorEnum.UNDERAGE:
      label = 'FUTURE_DATE';
      break;
  }

  if (label) {
    msg = translate ? translate(label) : label;
  }
  return msg;
};
