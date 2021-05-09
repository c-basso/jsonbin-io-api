import {JSONObject} from '../../../types';

export type UpdateSchemaDocsResponse = {
  record: JSONObject;
  metadata: {
    id: string;
    name: string;
    createdAt: string;
  };
};
