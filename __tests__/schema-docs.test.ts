import {JsonBinIoApiTest} from './JsonBinIoApiTest';
const api = new JsonBinIoApiTest();

describe('SchemaDocsApi', () => {
  it('create schemaDocs should be ok', async () => {
    const result = await api.schemaDocs.create({
      name: 'test',
      record: {
        test: 1
      }
    });

    expect(result).toEqual({
      route: '/s',
      data: {
        test: 1
      },
      headers: {
        'Content-Type': 'application/json',
        'X-Schema-Doc-Name': 'test',
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('read schemaDocs should be ok', async () => {
    const result = await api.schemaDocs.read({
      schemaDocId: '<schemaDocId>'
    });

    expect(result).toEqual({
      route: '/s/<schemaDocId>',
      headers: {
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('update schemaDocs should be ok', async () => {
    const result = await api.schemaDocs.update({
      schemaDocId: '<schemaDocId>',
      record: {test: 2}
    });

    expect(result).toEqual({
      route: '/s/<schemaDocId>',
      data: {test: 2},
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': 'test-api-key'
      }
    });
  });

  it('update schemaDocs name should be ok', async () => {
    const result = await api.schemaDocs.updateName({
      schemaDocId: '<schemaDocId>',
      schemaDocName: '<schemaDocName>'
    });

    expect(result).toEqual({
      route: '/s/<schemaDocId>',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'X-Schema-Doc-Name': '<schemaDocName>',
        'X-Master-Key': 'test-api-key'
      }
    });
  });
});
