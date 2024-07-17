"use client";

import React, { useState } from "react";

import Button from "@/components/usefulComponents/button/button";

import {
  UploaderComponentPropType,
  DocumentRecordType,
  uploadParams,
} from "@/components/usefulComponents/upload/uploaderTypes";
import Api from "@/helpers/api/apiMethods";
import resources from "@/utils/const/resources";

const Uploader: React.FC<UploaderComponentPropType> = ({ documentRecord }) => {
  let [state, setState] = useState<File>();
  let params: uploadParams;

  const paramsHandler = (documentRecord: DocumentRecordType) => {
    if (documentRecord.documentTypeName === "عکس پروفایل") {
      return (params = {
        refferTableId: "1",
        id: "d675137a-caa2-4741-85bf-54f13618559a",
        documentTypeId: "1",
      });
    } else {
      return (params = {
        refferTableId: "1",
        id: "d675137a-caa2-4741-85bf-54f13618559a",
        documentTypeId: "2",
      });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state) return;
    
    try {
      const data = new FormData();
      data.set("formFile", state);

      const documentId: string = documentRecord.documentTypeId;
      console.log("documentId uploader 29", documentRecord);
      let param = paramsHandler(documentRecord);
      console.log(data)

      // const params = {
      //   refferTableId: documentRecord.refferTableId,
      //   id: documentRecord.id,
      //   documentTypeId: documentRecord.documentTypeId,
      // };
      // const response = await fetch("/api/upload", {
      //   method: "post",
      //   body: data,
      // });
      // console.log("response uploader 22");
      Api.GDocument.uploadFile(data, param).then((res) => {
        // console.log("response uploader 37", res);
      });
      //   if (!response.ok) throw new Error(await response.text);
    } catch {
      console.log(e);
    }
  };
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setState(e.target.files?.[0])}

          // setState((prevState) => ({
          //     ...prevState,
          //     loading: true,
          //     reload: true,
          //   }));
        />
        <Button kind="primary" type="submit" shape="link">
          {resources.upload}
        </Button>
      </form>
    </>
  );
};

export default Uploader;
