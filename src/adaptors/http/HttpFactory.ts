import { HttpAdaptorsEnum } from './HttpAdaptorsEnum';
import { HttpInterface } from './HttpInterface';

/**
 * When needing to use a http adaptor, use this static class to make the correct
 * import for you, and instanciante it's return.
 * @retuns the appropriated http module (which will implement the HttpInterface)
 * to be used
 */
export class HttpFactory {
  public static async creator(
    using = HttpAdaptorsEnum.AXIOS
  ): Promise<HttpInterface> {
    let httpInstance: HttpInterface;

    switch (using) {
      case HttpAdaptorsEnum.AXIOS:
        const loaded = await import('./HttpAxios');
        httpInstance = new loaded.HttpAxios();
    }

    return httpInstance;
  }
}
