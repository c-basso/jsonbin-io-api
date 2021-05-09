import {JSONObject} from '../../../types';

export type UpdateBinResponse<RecordType = JSONObject> = {
  record: RecordType;
  metadata: {
    parentId: string;
    private: boolean;
  };
};
