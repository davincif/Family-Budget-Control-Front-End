import {
  UserCreateReq,
  UserCreateResp,
  UserLoginReq,
  UserLoginResp,
} from 'src/models/adaptros/repositories/UserAuth';
import {
  UserLoginTransfer,
  UserTransfer,
} from 'src/models/transfer/UserAuthTransfer';
import { HttpAdaptorsEnum } from '../http/HttpAdaptorsEnum';
import { HttpFactory } from '../http/HttpFactory';
import { HttpInterface } from '../http/HttpInterface';
import { UserAuthInterface } from './UserAuthInterface';

export class UserAuth implements UserAuthInterface {
  private httpClientWaiter: Promise<HttpInterface>;
  private host: string = '';

  constructor(host: string) {
    this.httpClientWaiter = HttpFactory.creator(HttpAdaptorsEnum.AXIOS);
    this.host = host;
  }

  public async login(email: string, password: string) {
    const httpClient = await this.httpClientWaiter;

    const resp = await httpClient.post<UserLoginReq, UserLoginResp>(
      this.getAddress('/users/login'),
      {
        email,
        password,
      }
    );

    // data translation (adaptor to transfer object)
    const userTransfer: UserLoginTransfer = {
      jwt: resp.jwt,
    };

    return userTransfer;
  }

  public async register(
    name: string,
    email: string,
    birth: string,
    password: string
  ) {
    const httpClient = await this.httpClientWaiter;

    const resp = await httpClient.post<UserCreateReq, UserCreateResp>(
      this.getAddress('/users'),
      {
        name,
        email,
        birth,
        password,
      }
    );

    // data translation (adaptor to transfer object)
    const userTransfer: UserTransfer = {
      id: resp.id,
      email: resp.email,
      birth: resp.birth,
      password: resp.password,
      creation: resp.creation,
      active: resp.active,
    };

    return userTransfer;
  }

  private getAddress(route: string) {
    return `${this.host}${route}`;
  }
}
