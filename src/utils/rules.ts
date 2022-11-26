import { LoginCore } from 'src/core/LoginCore';
import { RegisterCore } from 'src/core/RegisterCore';
import { BirthdayErrorEnum } from 'src/models/core/BirthdayErrorEnum';
import { PasswordErrroEnum } from 'src/models/core/PasswordErrorEnum';

export type TranslateFunc = (label: string) => string;
export type QuasarValidationResponse =
  | boolean
  | string
  | Promise<boolean | string>;

export class RulesUtils {
  private static instance: RulesUtils;
  private translate: TranslateFunc | undefined;

  /**
   * Call this funciton before everything to set up the module
   * @param translateFunc the translation/locale function if any exists
   */
  private constructor(translateFunc?: TranslateFunc) {
    this.translate = translateFunc || this.translate;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   * @param translateFunc the translation/locale function if any exists
   */
  public static getInstance({
    translateFunc,
  }: {
    translateFunc?: TranslateFunc;
  }): RulesUtils {
    if (!RulesUtils.instance) {
      RulesUtils.instance = new RulesUtils(translateFunc);
    }

    return RulesUtils.instance;
  }

  public setTranslateFunction(translateFunc?: TranslateFunc) {
    this.translate = translateFunc;
  }

  /**
   * Check if the password matches the business rules
   * @param val the password to check
   * @returns '' for success, error Label for translation otherwise
   */
  public passwordRule(val: string, core: LoginCore): QuasarValidationResponse {
    let msg: string | true = true;
    let label: string | undefined;

    const foundError = core.isPasswordValid(val);
    switch (foundError) {
      case PasswordErrroEnum.EMPTY:
        label = 'REQUIRED';
        break;

      case PasswordErrroEnum.TOOSHORT:
        label = 'INVALID';
        break;
    }

    if (label) {
      msg = this.translate ? this.translate(label) : label;
    }
    return msg;
  }

  /**
   * check if the given date matches the business rules for a birthday
   * @param val Birthday to check
   * @returns '' for success, error Label for translation otherwise
   */
  public birthdayRule(
    val: string,
    core: RegisterCore
  ): QuasarValidationResponse {
    let msg: string | true = true;
    let label: string | undefined;

    const foundError = core.isBirthdayValid(val);
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
      msg = this.translate ? this.translate(label) : label;
    }
    return msg;
  }
}
