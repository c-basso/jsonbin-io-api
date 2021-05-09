import {Api} from '../Api';

import {
  ReadSchemaDocsRequest,
  CreateSchemaDocsRequest,
  UpdateSchemaDocsRequest,
  UpdateSchemaDocsNameRequest
} from './request';

import {
  ReadSchemaDocsResponse,
  CreateSchemaDocsResponse,
  UpdateSchemaDocsResponse,
  UpdateSchemaDocsNameResponse
} from './response';

import {to} from '../../util';

export class SchemaDocsApi extends Api {
  _route = '/s';

  /**
   * https://jsonbin.io/api-reference/v3/schema-docs/create
   */
  async create(options: CreateSchemaDocsRequest): Promise<CreateSchemaDocsResponse> {
    const headers = this._withMasterKey({
      'Content-Type': 'application/json',
      'X-Schema-Doc-Name': options.name
    })

    const [error, result] = await to(
      this._httpClient.post(
        this._route,
        options.record,
        headers
      )
    );

    if (error) {
      throw error;
    }

    return result as CreateSchemaDocsResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/schema-docs/read
   */
  async read(options: ReadSchemaDocsRequest): Promise<ReadSchemaDocsResponse> {
    const headers = this._withMasterKey({})

    const route = `${this._route}/${options.schemaDocId}`;

    const [error, result] = await to(
      this._httpClient.get(route, headers)
    );

    if (error) {
      throw error;
    }

    return result as ReadSchemaDocsResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/schema-docs/update
   */
  async update(options: UpdateSchemaDocsRequest): Promise<UpdateSchemaDocsResponse> {
    const headers = this._withMasterKey({
      'Content-Type': 'application/json',
    })

    const route = `${this._route}/${options.schemaDocId}`;

    const [error, result] = await to(
      this._httpClient.put(route, options.record, headers)
    );

    if (error) {
      throw error;
    }

    return result as UpdateSchemaDocsResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/schema-docs/meta/name/update
   */
  async updateName(options: UpdateSchemaDocsNameRequest): Promise<UpdateSchemaDocsNameResponse> {
    const headers = this._withMasterKey({
      'Content-Type': 'application/json',
      'X-Schema-Doc-Name': options.schemaDocName
    })

    const route = `${this._route}/${options.schemaDocId}`;

    const [error, result] = await to(
      this._httpClient.put(route, {}, headers)
    );

    if (error) {
      throw error;
    }

    return result as UpdateSchemaDocsNameResponse;
  }
}
