import {JSONObject} from '../../../types';

export type CreateBinRequest<RecordType = JSONObject> = {
  binName?: string;
  private?: boolean;
  collectionId?: string;
  record: RecordType;
};
