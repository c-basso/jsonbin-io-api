import {JSONObject} from '../../../types';

export type ReadSchemaDocsResponse = {
  record: JSONObject;
  metadata: {
    id: string;
    name: string;
    createdAt: string;
  };
};
