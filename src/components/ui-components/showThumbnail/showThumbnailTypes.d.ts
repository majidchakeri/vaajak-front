
export type showThumbnailTypes = {
  files: [
    {
      id: number;
      ticketId: number;
      description: string;
      internalDescription: string;
      reffetToUserId: string;
      refferToUserFullName: string;
      creatorUserId: string;
      creatorUserFullName: string;
      createdDate: Date;
      urlAddress: string;
    }
  ];
};