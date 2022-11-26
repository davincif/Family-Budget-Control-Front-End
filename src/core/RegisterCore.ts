import { BirthdayErrorEnum } from 'src/models/core/BirthdayErrorEnum';

export class RegisterCore {
  private static instance: RegisterCore;

  private birthdayRules = {
    underage: 0,
    accFuture: false,
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
  public static getInstance(): RegisterCore {
    if (!RegisterCore.instance) {
      RegisterCore.instance = new RegisterCore();
    }

    return RegisterCore.instance;
  }

  /**
   * Checks if the given birthday is valid according to the business logic
   * @param birthday A date in the format yyyy-mm-dd ('-' can also be '/')
   * @returns which was the error found in the birthday, if any
   */
  public isBirthdayValid(birthday: string): BirthdayErrorEnum {
    // checking if something was passed
    if (!birthday) {
      return BirthdayErrorEnum.EMPTY;
    }

    // check date validity
    const birthDate = this.isDateValid(birthday);
    if (!birthDate) {
      return BirthdayErrorEnum.INVALID_DATE;
    }

    // checking for underage users
    const now = new Date();
    if (this.birthdayRules.underage > 0) {
      const minDate = new Date(now);
      minDate.setFullYear(minDate.getFullYear() - this.birthdayRules.underage);

      if (birthDate > minDate) {
        return BirthdayErrorEnum.UNDERAGE;
      }
    }

    // checking for underage users
    if (!this.birthdayRules.accFuture && birthDate > now) {
      return BirthdayErrorEnum.IN_THE_FUTURE;
    }

    // nothin' wrong 😎
    return BirthdayErrorEnum.NO_ERROR;
  }

  /**
   * Checks if a given date is valid and transformit into a javascript Date object
   * @param birthday A date in the format yyyy-mm-dd ('-' can also be '/')
   * @returns A date object if the date is valid, undefined otherwise
   */
  public isDateValid(birthday: string | Date): Date | undefined {
    let newDate: Date;

    if (typeof birthday === 'string') {
      birthday = birthday.split('T')[0].replaceAll('/', '-');
      newDate = new Date(`${birthday}T00:00:00.000`);
    } else {
      newDate = birthday;
    }

    return isNaN(newDate.getTime()) ? undefined : newDate;
  }
}
