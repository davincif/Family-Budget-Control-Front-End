import {
  UserLoginTransfer,
  UserTransfer,
} from 'src/models/transfer/UserAuthTransfer';

export interface UserAuthInterface {
  login: (email: string, password: string) => Promise<UserLoginTransfer>;
  register: (
    name: string,
    email: string,
    birth: string,
    password: string
  ) => Promise<UserTransfer>;
}
