import {Api} from '../Api';

import {
  CreateCollectionRequest,
  GetCollectionBinsRequest,
  UpdateCollectionNameRequest,
  AddSchemaToCollectionRequest
} from './request';

import {
  CreateCollectionResponse,
  GetCollectionBinsResponse,
  UpdateCollectionNameResponse,
  AddSchemaToCollectionResponse,
} from './response';

import {to} from '../../util';

/**
 * https://jsonbin.io/api-reference/collections/get-started
 */
export class CollectionsApi extends Api {
  _route = '/c';

  /**
   * https://jsonbin.io/api-reference/v3/collections/create
   */
  async create(request: CreateCollectionRequest): Promise<CreateCollectionResponse> {
    const headers = this._withMasterKey({
      'Content-Type': 'application/json',
      'X-Collection-Name': request.collectionName
    })

    const [error, result] = await to(
      this._httpClient.post(
        this._route,
        {},
        headers
      )
    );

    if (error) {
      throw error;
    }

    return result as CreateCollectionResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/collections/meta/name/update
   */
  async updateName(request: UpdateCollectionNameRequest): Promise<UpdateCollectionNameResponse> {
    const headers = this._withMasterKey({
      'Content-Type': 'application/json',
      'X-Collection-Name': request.collectionName
    })

    const route = `${this._route}/${request.collectionId}/meta/name`;

    const [error, result] = await to(
      this._httpClient.put(
        route,
        {},
        headers
      )
    );

    if (error) {
      throw error;
    }

    return result as UpdateCollectionNameResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/collections/schemadoc/add
   */
  async addSchemaToCollection(request: AddSchemaToCollectionRequest): Promise<AddSchemaToCollectionResponse> {
    const headers = this._withMasterKey({
      'X-Schema-Doc-Id': request.schemaDocId
    })

    const route = `${this._route}/${request.collectionId}/schemadoc/add`;

    const [error, result] = await to(
      this._httpClient.put(
        route,
        {},
        headers
      )
    );

    if (error) {
      throw error;
    }

    return result as AddSchemaToCollectionResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/collections/bins
   */
  async getBins(request: GetCollectionBinsRequest): Promise<GetCollectionBinsResponse> {
    const headers = this._withMasterKey({})

    let route = `${this._route}/${request.collectionId}/bins`;

    if (request.lastBinId) {
      route += `/${request.lastBinId}`;
    }

    const [error, result] = await to(
      this._httpClient.get(
        route,
        headers
      )
    );

    if (error) {
      throw error;
    }

    return result as unknown as GetCollectionBinsResponse;
  }
}
