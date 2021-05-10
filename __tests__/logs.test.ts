import {JsonBinIoApiTest} from './JsonBinIoApiTest';
const api = new JsonBinIoApiTest();

describe('LogsApi', () => {
  it('list should be ok', async () => {
    const result = await api.logs.list();

    expect(result).toEqual({
      route: '/l',
      headers: {
        'X-Master-Key': 'test-api-key'
      }
    });
  });
});
