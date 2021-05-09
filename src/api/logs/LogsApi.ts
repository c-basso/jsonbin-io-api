import {Api} from '../Api';
import * as stream from 'stream';

import {
  DownloadLogsRequest
} from './request';

import {
  LogsListResponse
} from './response';

import {to} from '../../util';

export class LogsApi extends Api {
  _route = '/l';

  /**
   * https://jsonbin.io/api-reference/v3/usage-logs/list
   */
  async list(): Promise<LogsListResponse> {
    const headers = this._withMasterKey({})

    const [error, result] = await to(
      this._httpClient.get(this._route, headers)
    );

    if (error) {
      throw error;
    }

    return result as LogsListResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/usage-logs/download
   */
  async download(request: DownloadLogsRequest): Promise<stream.Stream> {
    const headers = this._withMasterKey({})
    const route = `${this._route}/${request.date}`;

    const [error, result] = await to(
      this._httpClient.get(route, headers, true)
    );

    if (error) {
      throw error;
    }

    return result as stream.Stream;
  }
}
