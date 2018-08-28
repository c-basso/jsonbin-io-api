'use strict'

const assert = require('assert')
const proxyquire = require('proxyquire')
const JsonBinIoApi = proxyquire(
  '..',
  {
    'node-fetch': (url, options) => Promise.resolve({
      json: () => ({url, options})
    })
  }
)

const api = new JsonBinIoApi('test-secret-key')

describe('JsonBinIoApi', () => {
  it('createBin', (done) => {
    api.createBin({
      data: {test: 1}
    })
      .then(({url, options}) => {
        assert.strictEqual(url, 'https://api.jsonbin.io/b')
        assert.deepStrictEqual(options, {
          method: 'POST',
          body: '{"test":1}',
          headers: {
            'Content-Type': 'application/json',
            'secret-key': 'test-secret-key'
          }
        })
        done()
      })
      .catch(done)
  })

  it('updateBin', (done) => {
    api.updateBin({
      id: '5b8587273ffac56f4bd612c3',
      data: {test: 1}
    })
      .then(({url, options}) => {
        assert.strictEqual(url, 'https://api.jsonbin.io/b/5b8587273ffac56f4bd612c3')
        assert.deepStrictEqual(options, {
          method: 'PUT',
          body: '{"test":1}',
          headers: {
            'Content-Type': 'application/json',
            'secret-key': 'test-secret-key'
          }
        })
        done()
      })
      .catch(done)
  })

  it('readBin', (done) => {
    api.readBin({
      id: '5b8587273ffac56f4bd612c3'
    })
      .then(({url, options}) => {
        assert.strictEqual(url, 'https://api.jsonbin.io/b/5b8587273ffac56f4bd612c3/latest')
        assert.deepStrictEqual(options, {
          method: 'GET',
          headers: {
            'secret-key': 'test-secret-key'
          }
        })
        done()
      })
      .catch(done)
  })

  it('deleteBin', (done) => {
    api.deleteBin({
      id: '5b8587273ffac56f4bd612c3'
    })
      .then(({url, options}) => {
        assert.strictEqual(url, 'https://api.jsonbin.io/b/5b8587273ffac56f4bd612c3')
        assert.deepStrictEqual(options, {
          method: 'DELETE',
          headers: {
            'secret-key': 'test-secret-key'
          }
        })
        done()
      })
      .catch(done)
  })

  it('createCollection', (done) => {
    api.createCollection({
      data: {
        name: 'my name is what?'
      }
    })
      .then(({url, options}) => {
        assert.strictEqual(url, 'https://api.jsonbin.io/c')
        assert.deepStrictEqual(options, {
          method: 'POST',
          body: '{"name":"my name is what?"}',
          headers: {
            'Content-Type': 'application/json',
            'secret-key': 'test-secret-key'
          }
        })
        done()
      })
      .catch(done)
  })

  it('updateCollection', (done) => {
    api.updateCollection({
      id: '5b8587273ffac56f4bd612c3',
      data: {
        name: 'my name is what?'
      }
    })
      .then(({url, options}) => {
        assert.strictEqual(url, 'https://api.jsonbin.io/c/5b8587273ffac56f4bd612c3')
        assert.deepStrictEqual(options, {
          method: 'PUT',
          body: '{"name":"my name is what?"}',
          headers: {
            'Content-Type': 'application/json',
            'secret-key': 'test-secret-key'
          }
        })
        done()
      })
      .catch(done)
  })
})
