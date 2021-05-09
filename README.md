# Zero dependencies NodeJs Api for [jsonbin.io](https://jsonbin.io) v3

## Install
```shell
npm i jsonbin-io-api --save
```


## Using

```ts
import {JsonBinIoApi} from 'jsonbin-io-api';
const api = new JsonBinIoApi('your-secret-key');
```

## create bin

```ts
api.bins.create({
  record: {sample: 'Hello World'},
  binName: 'test'
})
.then(console.log);
```

## read bin

```ts
api.bins.read({
  binId: 'some-bin-id'
})
.then(console.log);
```

## update bin

```ts
api.bins.update({
  binId: 'some-bin-id',
  record: {sample: 'Hello World again!'}
})
.then(console.log);
```

## delete bin

```ts
api.bins.delete({
  binId: 'some-bin-id'
})
.then(console.log);
```
