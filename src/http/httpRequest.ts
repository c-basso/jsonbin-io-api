import * as https from 'https';
import * as stream from 'stream';
import {JSONObject} from '../types';

type Request = {
  data?: JSONObject | string;
  options: https.RequestOptions,
  responseType?: 'json' | 'stream';
};

export const httpRequest = ({
  data,
  options,
  responseType = 'json'
}: Request): Promise<stream.Stream | JSONObject> => {
  if (data) {
    data = JSON.stringify(data);
    options.headers['Content-Length'] = Buffer.byteLength(data);
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      if (responseType === 'stream' && res.statusCode === 200) {
        resolve(res);
      } else {
        const result: string[] = [];

        res.on('data', (chunk) => {
          result.push(chunk);
        });

        res.on('end', () => {
          const response = JSON.parse(result.join(''));

          if (res.statusCode === 200) {
            resolve(response);
            return;
          }

          reject(response);
        });
      }
    });

    req.on('error', reject);

    if (data) {
      req.write(data);
    }

    req.end();
  });
};
