'use strict'

const fetch = require('node-fetch')
const ROOT = 'https://api.jsonbin.io'

const isBoolean = (variable) => typeof (variable) === typeof (true)

/**
 * JsonBinIoApi
 * @class
 */
module.exports = class JsonBinIoApi {
  /**
   * @param {String} [secretKey] secret key
   * @constructor
   */
  constructor (secretKey) {
    this._secretKey = secretKey
  }

  /**
   * Create Public or Private bin
   * @see https://jsonbin.io/api-reference/bins/create
   * @param {Object} options
   * @param {Object} options.data your json
   * @param {String} [options.collectionId] collection id
   * @param {Boolean} [options.isPrivate] save bin as private
   * @returns {Promise}
   */
  createBin ({
    data,
    collectionId,
    isPrivate
  }) {
    const headers = this._withSecretKey({
      'Content-Type': 'application/json'
    })

    if (collectionId) {
      headers['collection-id'] = collectionId
    }

    if (isBoolean(isPrivate)) {
      headers['private'] = isPrivate
    }

    const url = `${ROOT}/b`
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }

    return fetch(url, options).then((res) => res.json())
  }

  /**
   * Read Public or Private bin
   * @see https://jsonbin.io/api-reference/bins/read
   * @param {Object} options
   * @param {String} options.id bin id
   * @param {String} [options.version] version
   * @returns {Promise}
   */
  readBin ({
    id,
    version = 'latest'
  }) {
    const url = `${ROOT}/b/${id}/${version}`
    const options = {
      method: 'GET',
      headers: this._withSecretKey()
    }
    return fetch(url, options).then((res) => res.json())
  }

  /**
   * Update Public or Private bin
   * @see https://jsonbin.io/api-reference/bins/update
   * @param {Object} options
   * @param {Object} options.data new bin
   * @param {String} options.binId bin id
   * @param {Boolean} [options.versioning] versioning
   * @returns {Promise}
   */
  updateBin ({
    data,
    id,
    versioning
  }) {
    const headers = this._withSecretKey({
      'Content-Type': 'application/json'
    })

    if (isBoolean(versioning)) {
      headers['versioning'] = versioning
    }

    const url = `${ROOT}/b/${id}`
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers
    }
    return fetch(url, options).then((res) => res.json())
  }

  /**
   * Delete the Public or a Private bin
   * @see https://jsonbin.io/api-reference/bins/delete
   * @param {Object} options
   * @param {String} options.id bin id
   * @returns {Promise}
   */
  deleteBin ({id}) {
    const url = `${ROOT}/b/${id}`
    const options = {
      method: 'DELETE',
      headers: this._withSecretKey()
    }
    return fetch(url, options).then((res) => res.json())
  }

  /**
   * CREATE Collection
   * @see https://jsonbin.io/api-reference/collections/create
   * @param {Object} options
   * @param {Object} options.body collection desc
   * @returns {Promise}
   */
  createCollection ({data}) {
    const headers = this._withSecretKey({
      'Content-Type': 'application/json'
    })

    const url = `${ROOT}/c`
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }

    return fetch(url, options).then((res) => res.json())
  }

  /**
   * UPDATE Collections name
   * @see https://jsonbin.io/api-reference/collections/update
   * @param {Object} options
   * @param {String} options.id collection id
   * @param {Object} options.body new collection desc
   * @returns {Promise}
   */
  updateCollection ({id, data}) {
    const headers = this._withSecretKey({
      'Content-Type': 'application/json'
    })

    const url = `${ROOT}/c/${id}`
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers
    }
    return fetch(url, options).then((res) => res.json())
  }

  /**
   * Fetch all the versions of a specific Bin
   * @see https://jsonbin.io/api-reference/experimental/request-versions
   * @param {Object} options
   * @param {String} options.binId bin id
   * @returns {Object}
   */
  requestVersions ({binId}) {
    const url = `${ROOT}/c/${binId}/versions`
    const options = {
      method: 'GET',
      headers: this._withSecretKey()
    }
    return fetch(url, options).then((res) => res.json())
  }

  /**
   * Build Http Headers with secret key
   * @private
   * @param {Object} headers http headers
   * @returns {Object}
   */
  _withSecretKey (headers) {
    const mix = {}

    if (this._secretKey) {
      mix['secret-key'] = this._secretKey
    }

    return Object.assign({}, headers, mix)
  }
}
