import { HttpHeader } from "./HttpHeader";

export interface HttpInterface {
  /**
   * GET verb form HTTP
   * @param url
   * @param config
   */
  get<Resp>(url: string, config?: HttpHeader): Promise<Resp>;

  /**
   * POST verb form HTTP
   * @param url
   * @param config
   */
  post<Req, Resp>(url: string, data: Req, config?: HttpHeader): Promise<Resp>;

  /**
   * PUT verb form HTTP
   * @param url
   * @param config
   */
  put<Req, Resp>(url: string, data: Req, config?: HttpHeader): Promise<Resp>;

  /**
   * PATCH verb form HTTP
   * @param url
   * @param config
   */
  patch<Req, Resp>(url: string, data: Req, config?: HttpHeader): Promise<Resp>;

  /**
   *  DELETE verb form HTTP
   * @param url
   * @param config
   */
  delete<Resp>(url: string, config?: HttpHeader): Promise<Resp>;
}
