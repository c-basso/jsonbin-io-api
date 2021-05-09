import {JSONObject} from '../../../types';

export type CreateSchemaDocsResponse = {
  record: JSONObject;
  metadata: {
    id: string;
    name: string;
    createdAt: string;
  };
};
