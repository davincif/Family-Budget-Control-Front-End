export interface UserCreateReq {
  name: string;
  email: string;
  birth: string;
  password: string;
}

export interface UserCreateResp {
  id: number;
  email: string;
  birth: string;
  password: string;
  creation: string;
  active: boolean;
}

export interface UserLoginReq {
  email: string;
  password: string;
}

export interface UserLoginResp {
  jwt: string;
}
