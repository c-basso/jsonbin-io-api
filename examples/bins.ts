import {JsonBinIoApi} from '..';

const api = new JsonBinIoApi('---YOUR-API-KEY-HERE---');

/*
api.bins.create({
  record: {
    test: 1
  },
  binName: 'test'
})
  .then(console.log)
  .catch(console.log);

{
  "record": {
    "test": 1
  },
  "metadata": {
    "id": "6097bc32a23274124b00f461",
    "createdAt": "2021-05-09T10:40:50.721Z",
    "private": true,
    "name": "test"
  }
}
*/


/*

api.bins.read({binId: '6097bc32a23274124b00f461'})
  .then(console.log)
  .catch(console.log);

  {
    "record": {
      "test": 1
    },
    "metadata": {
      "id": "6097bc32a23274124b00f461",
      "private": true,
      "createdAt": "2021-05-09T10:40:50.721Z"
    }
  }

*/


/*

api.bins.update({
  binId: '6097bc32a23274124b00f461',
  record: {
    test: 2
  }
})
  .then((a) => console.log(JSON.stringify(a, null, 2)))
  .catch(console.log);

  {
    "record": {
      "test": 2
    },
    "metadata": {
      "parentId": "6097bc32a23274124b00f461",
      "private": true
    }
  }


*/
