import {HttpClient} from '../http';

export class Api {
  protected readonly _httpClient: HttpClient;
  private readonly _apiKey: string;

  constructor(httpClient: HttpClient, apiKey: string) {
    this._httpClient = httpClient;
    this._apiKey = apiKey;
  }

  /**
   * Provide apiKey to headers
   */
  protected _withMasterKey(
    headers: Record<string, string>
  ): Record<string, string> {
    const mix: Record<string, string> = {}

    if (this._apiKey) {
      mix['X-Master-Key'] = this._apiKey
    }

    return {...headers, ...mix};
  }
}
