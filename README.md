# NodeJs Api for [jsonbin.io](https://jsonbin.io)

## Install
```shell
npm i jsonbin-io-api --save
```


## Using

```js
const JsonBinIoApi = require('jsonbin-io-api');
const api = new JsonBinIoApi('your-secret-key');
```

## create bin

```js
api.createBin({
  collectionId: 'some-collection-id',
  data: {sample: 'Hello World'},
  isPrivate: false
})
.then(console.log);
```

## read bin

```js
api.readBin({
  id: 'some-bin-id',
  version: 'latest'
})
.then(console.log);
```

## update bin

```js
api.updateBin({
  id: 'some-bin-id',
  data: {sample: 'Hello World again!'},
  versioning: true
})
.then(console.log);
```

## delete bin

```js
api.deleteBin({
  id: 'some-bin-id'
})
.then(console.log);
```

## create collection (`name` is requires field)

```js
api.createCollection({
  data: {
    name: 'Sample Collection'
  }
})
.then(console.log);
```

## update collection (`name` is requires field)

```js
api.updateCollection({
  id: 'some-collection-id',
  data: {
    name: 'Sample Collection'
  }
})
.then(console.log);
```


