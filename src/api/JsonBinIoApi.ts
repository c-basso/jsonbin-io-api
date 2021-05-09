import {HttpClient} from '../http';

import {BinsApi} from './bins/BinsApi';
import {LogsApi} from './logs/LogsApi';
import {SchemaDocsApi} from './schema-docs/SchemaDocsApi';
import {CollectionsApi} from './collections/CollectionsApi';

export class JsonBinIoApi {
  public readonly bins: BinsApi;
  public readonly logs: LogsApi;
  public readonly schemaDocs: SchemaDocsApi;
  public readonly collections: CollectionsApi;

  constructor(secretKey: string) {
    const httpClient = this._getHttpClient();

    this.bins = new BinsApi(httpClient, secretKey);
    this.logs = new LogsApi(httpClient, secretKey);
    this.schemaDocs = new SchemaDocsApi(httpClient, secretKey);
    this.collections = new CollectionsApi(httpClient, secretKey);
  }

  protected _getHttpClient(): HttpClient {
    return new HttpClient();
  }
}
