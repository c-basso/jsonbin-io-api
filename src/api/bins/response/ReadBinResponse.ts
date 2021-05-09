import {JSONObject} from '../../../types';

export type ReadBinResponse<RecordType = JSONObject> = {
  record: RecordType;
  metadata: {
    id: string;
    private: boolean;
  };
};
