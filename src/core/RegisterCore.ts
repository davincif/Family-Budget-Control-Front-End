import { BirthdayErrorEnum } from 'src/models/core/BirthdayErrorEnum';

const birthdayRules = {
  underage: 0,
  accFuture: false,
};

/**
 * Checks if the given birthday is valid according to the business logic
 * @param birthday A date in the format yyyy-mm-dd ('-' can also be '/')
 * @returns which was the error found in the birthday, if any
 */
export function isBirthdayValid(birthday: string): BirthdayErrorEnum {
  // checking if something was passed
  if (!birthday) {
    return BirthdayErrorEnum.EMPTY;
  }

  // check date validity
  const birthDate = isDateValid(birthday);
  if (!birthDate) {
    return BirthdayErrorEnum.INVALID_DATE;
  }

  // checking for underage users
  const now = new Date();
  if (birthdayRules.underage > 0) {
    const minDate = new Date(now);
    minDate.setFullYear(minDate.getFullYear() - birthdayRules.underage);

    if (birthDate > minDate) {
      return BirthdayErrorEnum.UNDERAGE;
    }
  }

  // checking for underage users
  if (!birthdayRules.accFuture && birthDate > now) {
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
export function isDateValid(birthday: string | Date): Date | undefined {
  let newDate: Date;

  if (typeof birthday === 'string') {
    birthday = birthday.split('T')[0].replaceAll('/', '-');
    newDate = new Date(`${birthday}T00:00:00.000`);
  } else {
    newDate = birthday;
  }

  return isNaN(newDate.getTime()) ? undefined : newDate;
}
