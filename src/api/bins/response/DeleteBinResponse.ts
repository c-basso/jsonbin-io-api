export type DeleteBinResponse = {
  metadata: {
    id: string;
    versionsDeleted: number;
  };
  message: string;
};
