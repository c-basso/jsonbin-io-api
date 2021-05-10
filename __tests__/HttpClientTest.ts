import stream from 'stream';
import {HttpClient} from '../src/http/HttpClient';
import {JSONObject} from '../src/types';

export class HttpClientTest extends HttpClient {
  post(
    route: string,
    data: JSONObject,
    headers: Record<string, string>
  ): Promise<JSONObject> {
    return Promise.resolve({
      data,
      route,
      headers
    });
  }

  get(
    route: string,
    headers: Record<string, string>,
    isStream?: boolean
  ): Promise<stream.Stream | JSONObject> {
    if (isStream) {
      return Promise.resolve({
        route,
        headers
      });
    }

    return Promise.resolve({
      route,
      headers
    });
  }

  put(
    route: string,
    data: JSONObject,
    headers: Record<string, string>
  ): Promise<JSONObject> {
    return Promise.resolve({
      data,
      route,
      headers
    });
  }

  delete(
    route: string,
    headers: Record<string, string>
  ): Promise<JSONObject> {
    return Promise.resolve({
      route,
      headers
    });
  }
}
