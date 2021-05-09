import {JSONObject} from '../../../types';

export type UpdateBinRequest<RecordType = JSONObject> = {
  binId: string;
  record: RecordType;
  enableVersioning?: boolean;
};
