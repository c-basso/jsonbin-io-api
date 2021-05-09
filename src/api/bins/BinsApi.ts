import {Api} from '../Api';

import {
  ReadBinRequest,
  DeleteBinRequest,
  CreateBinRequest,
  UpdateBinRequest,
  UpdateBinPrivacyRequest,
  BinVersionsCountRequest,
  DeleteBinVersionsRequest
} from './request';

import {
  ReadBinResponse,
  UpdateBinResponse,
  DeleteBinResponse,
  CreateBinResponse,
  BinVersionsCountResponse
} from './response';

import {JSONObject} from '../../types';

import {to, isBoolean} from '../../util';

/**
 * https://jsonbin.io/api-reference/bins/get-started
 */
export class BinsApi extends Api {
  _route = '/b';

  /**
   * https://jsonbin.io/api-reference/v3/bins/create
   */
  async create<
    RecordType = JSONObject
  >(
    request: CreateBinRequest<RecordType>
  ): Promise<CreateBinResponse<RecordType>> {
    const headers = this._withMasterKey({
      'Content-Type': 'application/json'
    })

    if (request.binName) {
      headers['X-Bin-Name'] = request.binName
    }

    if (request.collectionId) {
      headers['X-Collection-Id'] = request.collectionId
    }

    if (isBoolean(request.private)) {
      headers['X-Bin-Private'] = request.private.toString();
    }

    const [error, result] = await to(
      this._httpClient.post(
        this._route,
        request.record as unknown as JSONObject,
        headers
      )
    );

    if (error) {
      throw error;
    }

    return result as unknown as CreateBinResponse<RecordType>;
  }

  /**
   * https://jsonbin.io/api-reference/v3/bins/read
   */
  async read<
    RecordType = JSONObject
  >(request: ReadBinRequest): Promise<ReadBinResponse<RecordType>> {
    const headers = this._withMasterKey({})

    const version = request.version || 'latest';
    const route = `${this._route}/${request.binId}/${version}`;

    const [error, result] = await to(
      this._httpClient.get(route, headers)
    );

    if (error) {
      throw error;
    }

    return result as unknown as ReadBinResponse<RecordType>;
  }

  /**
   * https://jsonbin.io/api-reference/v3/bins/update
   */
  async update<
    RecordType = JSONObject
  >(request: UpdateBinRequest<RecordType>): Promise<UpdateBinResponse<RecordType>> {
    const headers = this._withMasterKey({
      'Content-Type': 'application/json'
    })

    if (isBoolean(request.enableVersioning)) {
      headers['X-Bin-Versioning'] = request.enableVersioning.toString();
    }

    const route = `${this._route}/${request.binId}`;

    const [error, result] = await to(
      this._httpClient.put(
        route,
        request.record as unknown as JSONObject,
        headers
      )
    );

    if (error) {
      throw error;
    }

    return result as unknown as UpdateBinResponse<RecordType>;
  }

  /**
   * https://jsonbin.io/api-reference/v3/bins/delete
   */
  async delete(request: DeleteBinRequest): Promise<DeleteBinResponse> {
    const headers = this._withMasterKey({})

    const route = `${this._route}/${request.binId}`;

    const [error, result] = await to(
      this._httpClient.delete(route, headers)
    );

    if (error) {
      throw error;
    }

    return result as DeleteBinResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/bins/versions/count
   */
  async versionsCount(request: BinVersionsCountRequest): Promise<BinVersionsCountResponse> {
    const headers = this._withMasterKey({})

    const route = `${this._route}/${request.binId}/versions/counts`;

    const [error, result] = await to(
      this._httpClient.get(route, headers)
    );

    if (error) {
      throw error;
    }

    return result as BinVersionsCountResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/bins/versions/count
   */
  async deleteVersions(request: DeleteBinVersionsRequest): Promise<DeleteBinResponse> {
    const headers = this._withMasterKey({})

    if (isBoolean(request.preserveLatest)) {
      headers['X-Preserve-Latest'] = request.preserveLatest.toString();
    }

    const route = `${this._route}/${request.binId}/versions`;

    const [error, result] = await to(
      this._httpClient.delete(route, headers)
    );

    if (error) {
      throw error;
    }

    return result as DeleteBinResponse;
  }

  /**
   * https://jsonbin.io/api-reference/v3/bins/meta/privacy/update
   */
  async updatePrivacy(request: UpdateBinPrivacyRequest): Promise<DeleteBinResponse> {
    const headers = this._withMasterKey({
      'X-Bin-Private': request.private.toString()
    })
    const route = `${this._route}/${request.binId}/meta/privacy`;

    const [error, result] = await to(
      this._httpClient.put(route, {}, headers)
    );

    if (error) {
      throw error;
    }

    return result as DeleteBinResponse;
  }
}
