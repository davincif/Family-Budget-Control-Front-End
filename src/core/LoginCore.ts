import { PasswordErrroEnum } from 'src/models/core/PasswordErrorEnum';

export class LoginCore {
  private static instance: LoginCore;

  private passwordRules = {
    minSize: 6,
  };

  /**
   * Call this funciton before everything to set up the module
   */
  private constructor() {
    // code
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   * @param translateFunc the translation/locale function if any exists
   */
  public static getInstance(): LoginCore {
    if (!LoginCore.instance) {
      LoginCore.instance = new LoginCore();
    }

    return LoginCore.instance;
  }

  /**
   * Teste if the password is valid or not
   * @param password the password to be tested
   * @returns which was the error found in the password, if any
   */
  public isPasswordValid(password: string): PasswordErrroEnum {
    if (!password) {
      return PasswordErrroEnum.EMPTY;
    } else if (password.length < this.passwordRules.minSize) {
      return PasswordErrroEnum.TOOSHORT;
    }

    return PasswordErrroEnum.NO_ERROR;
  }
}
