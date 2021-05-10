import fs from 'fs';
import path from 'path';
import {JsonBinIoApi} from '..';

const api = new JsonBinIoApi('---YOUR-API-KEY-HERE---');

/*
api.logs.list()
  .then(console.log)
  .catch(console.log);

>>> { logs: [ '09-05-2021', '10-05-2021' ] }
*/


/*
api.logs.download({
  date: '09-05-2021'
})
  .then((res) => {
    res.pipe(
      fs.createWriteStream(
        path.resolve(__dirname, 'logs.zip')
      )
    );
  })
  .catch(console.log);

>>> save logs.zip file in current dir
*/
