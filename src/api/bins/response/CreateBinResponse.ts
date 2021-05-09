import {JSONObject} from '../../../types';

export type CreateBinResponse<RecordType = JSONObject> = {
  record: RecordType;
  metadata: {
    id: string;
    createdAt: string;
    private: boolean;
  };
};
