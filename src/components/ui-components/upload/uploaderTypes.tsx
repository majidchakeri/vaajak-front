export type DocumentRecordType = {
  documentTypeName: string;
  // documentTypeId: string;
  refferTableId: string;
  id: string;
  documentTypeId: string;
  urlAddress: string;
  confirmStatus: string;
};

export type UploaderComponentPropType = {
  documentRecord: DocumentRecordType;
};

export type uploadParams = {
  refferTableId: string;
  id: string;
  documentTypeId: string;
};
