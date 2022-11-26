export interface UserTransfer {
  id: number;
  email: string;
  birth: string;
  password: string;
  creation: string;
  active: boolean;
}

export interface UserLoginTransfer {
  jwt: string;
}
