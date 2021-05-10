import {JsonBinIoApi} from '../src/api/JsonBinIoApi';
import {HttpClient} from '../src/http/HttpClient';
import {HttpClientTest} from './HttpClientTest';

export class JsonBinIoApiTest extends JsonBinIoApi {
  constructor() {
    super('test-api-key');
  }

  _getHttpClient(): HttpClient {
    return new HttpClientTest();
  }
};
