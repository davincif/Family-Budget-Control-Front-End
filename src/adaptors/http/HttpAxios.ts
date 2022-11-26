import { AxiosRequestConfig } from 'axios';
import { api } from 'src/boot/axios';
import { HttpHeader } from './HttpHeader';

import { HttpInterface } from './HttpInterface';

/**
 * Using axious to make the needed http requests
 */
export class HttpAxios implements HttpInterface {
  constructor() {
    // code
  }

  public get<Resp>(url: string, config: HttpHeader = {}): Promise<Resp> {
    return api.get(url, { headers: config });
  }

  public post<Req, Resp>(
    url: string,
    data: Req,
    config: HttpHeader = {}
  ): Promise<Resp> {
    return api.post(url, data, { headers: config });
  }

  public put<Req, Resp>(
    url: string,
    data: Req,
    config: HttpHeader = {}
  ): Promise<Resp> {
    throw new Error('Method not implemented.');
  }

  public patch<Req, Resp>(
    url: string,
    data: Req,
    config: HttpHeader = {}
  ): Promise<Resp> {
    throw new Error('Method not implemented.');
  }

  public delete<Resp>(url: string, config: HttpHeader = {}): Promise<Resp> {
    throw new Error('Method not implemented.');
  }
}
