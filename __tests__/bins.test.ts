import {JsonBinIoApiTest} from './JsonBinIoApiTest';
const api = new JsonBinIoApiTest();

describe('BinsApi', () => {
  it('create bin should be ok', async () => {
    const result = await api.bins.create({
      record: {test: 1},
      binName: 'binName',
      private: true,
      collectionId: 'collectionId'
    });

    expect(result).toEqual({
      route: '/b',
      data: {test: 1},
      headers: {
        'Content-Type': 'application/json',
        'X-Bin-Name': 'binName',
        'X-Bin-Private': 'true',
        'X-Collection-Id': 'collectionId',
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('update bin should be ok', async () => {
    const result = await api.bins.update({
      record: {test: 2},
      binId: '<binId>'
    });

    expect(result).toEqual({
      route: '/b/<binId>',
      data: {test: 2},
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('read bin should be ok', async () => {
    const result = await api.bins.read({
      binId: '<binId>'
    });

    expect(result).toEqual({
      route: '/b/<binId>/latest',
      headers: {
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('delete bin should be ok', async () => {
    const result = await api.bins.delete({
      binId: '<binId>'
    });

    expect(result).toEqual({
      route: '/b/<binId>',
      headers: {
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('versionsCount should be ok', async () => {
    const result = await api.bins.versionsCount({
      binId: '<binId>'
    });

    expect(result).toEqual({
      route: '/b/<binId>/versions/counts',
      headers: {
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('deleteVersions should be ok', async () => {
    const result = await api.bins.deleteVersions({
      binId: '<binId>',
      preserveLatest: true
    });

    expect(result).toEqual({
      route: '/b/<binId>/versions',
      headers: {
        'X-Master-Key': 'test-api-key',
        'X-Preserve-Latest': 'true'
      }
    });
  });

  it('updatePrivacy should be ok', async () => {
    const result = await api.bins.updatePrivacy({
      binId: '<binId>',
      private: true
    });

    expect(result).toEqual({
      data: {},
      route: '/b/<binId>/meta/privacy',
      headers: {
        'X-Master-Key': 'test-api-key',
        'X-Bin-Private': 'true'
      }
    });
  });

  it('updateName should be ok', async () => {
    const result = await api.bins.updateName({
      binId: '<binId>',
      binName: 'TestName'
    });

    expect(result).toEqual({
      data: {},
      route: '/b/<binId>/meta/name',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': 'test-api-key',
        'X-Bin-Name': 'TestName'
      }
    });
  });
});
