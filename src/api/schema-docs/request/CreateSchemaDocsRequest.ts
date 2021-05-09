import {JSONObject} from '../../../types';

/**
 * Using the SCHEMA DOCS CREATE API,
 * you can CREATE Schema docs which can be used to validate records
 * if attached to a Collection.
 */
export type CreateSchemaDocsRequest = {
  /**
   * Is required to Name your Schema Doc.
   * You can set a name no more than 32 characters.
   */
  name: string;

  /**
   * SCHEMA_VALIDATION_JSON
   */
  record: JSONObject;
}
