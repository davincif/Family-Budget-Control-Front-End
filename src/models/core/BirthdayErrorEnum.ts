export enum BirthdayErrorEnum {
  // No error!
  NO_ERROR = 0,

  // No string passed
  EMPTY,

  UNDERAGE,

  // did this user just time traveled? 😑
  IN_THE_FUTURE,

  INVALID_DATE,
}
