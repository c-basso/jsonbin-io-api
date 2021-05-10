import {JsonBinIoApi} from '..';

const api = new JsonBinIoApi('---YOUR-API-KEY-HERE---');

/*
api.collections.create({collectionName: 'test collection'})
  .then(console.log)
  .catch(console.log);

>>> { record: '60990dc31a02f86e1f076b85',
  metadata:
   { createdAt: '2021-05-10T10:41:07.061Z',
     name: 'test collection' } }
*/

/*
api.collections.getBins({collectionId: '60990dc31a02f86e1f076b85'})
  .then(console.log)
  .catch(console.log);

>>> []
*/

/*
api.collections.updateName({
  collectionId: '60990dc31a02f86e1f076b85',
  collectionName: 'updated name'
})
  .then(console.log)
  .catch(console.log);

>>> { record: '60990dc31a02f86e1f076b85',
metadata: { name: 'updated name' } }
*/
