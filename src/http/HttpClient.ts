import * as stream from 'stream';
import {SCHEME, HOST, ROOT} from './constants';
import {httpRequest} from './httpRequest';
import {JSONObject} from '../types';

export class HttpClient {
  post(
    route: string,
    data: JSONObject,
    headers: Record<string, string>
  ): Promise<JSONObject> {
    return httpRequest({
      options: {
        path: `${ROOT}${route}`,
        protocol: SCHEME,
        hostname: HOST,
        method: 'POST',
        headers
      },
      data
    }) as Promise<JSONObject>;
  }

  get(
    route: string,
    headers: Record<string, string>,
    isStream?: boolean
  ): Promise<stream.Stream | JSONObject> {
    return httpRequest({
      options: {
        path: `${ROOT}${route}`,
        protocol: SCHEME,
        hostname: HOST,
        method: 'GET',
        headers
      },
      responseType: isStream ? 'stream' : 'json'
    });
  }

  put(
    route: string,
    data: JSONObject,
    headers: Record<string, string>
  ): Promise<JSONObject> {
    return httpRequest({
      options: {
        path: `${ROOT}${route}`,
        protocol: SCHEME,
        hostname: HOST,
        method: 'PUT',
        headers,
      },
      data
    }) as Promise<JSONObject>;
  }

  delete(
    route: string,
    headers: Record<string, string>
  ): Promise<JSONObject> {
    return httpRequest({
      options: {
        path: `${ROOT}${route}`,
        protocol: SCHEME,
        hostname: HOST,
        method: 'GET',
        headers
      }
    }) as Promise<JSONObject>;
  }
}
