import {JsonBinIoApiTest} from './JsonBinIoApiTest';
const api = new JsonBinIoApiTest();

describe('CollectionsApi', () => {
  it('create collection should be ok', async () => {
    const result = await api.collections.create({
      collectionName: 'collectionName'
    });

    expect(result).toEqual({
      route: '/c',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'X-Collection-Name': 'collectionName',
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('updateName should be ok', async () => {
    const result = await api.collections.updateName({
      collectionName: 'collectionName',
      collectionId: '<collectionId>'
    });

    expect(result).toEqual({
      route: '/c/<collectionId>/meta/name',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'X-Collection-Name': 'collectionName',
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('addSchemaToCollection should be ok', async () => {
    const result = await api.collections.addSchemaToCollection({
      schemaDocId: 'schemaDocId',
      collectionId: '<collectionId>'
    });

    expect(result).toEqual({
      route: '/c/<collectionId>/schemadoc/add',
      data: {},
      headers: {
        'X-Schema-Doc-Id': 'schemaDocId',
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('getBins should be ok', async () => {
    const result = await api.collections.getBins({
      collectionId: '<collectionId>'
    });

    expect(result).toEqual({
      route: '/c/<collectionId>/bins',
      headers: {
        'X-Master-Key': 'test-api-key'
      }
    });
  });
});
