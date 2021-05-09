import {JSONObject} from '../../../types';

export type UpdateSchemaDocsNameResponse = {
  record: JSONObject;
  metadata: {
    id: string;
    name: string;
    createdAt: string;
  };
};
