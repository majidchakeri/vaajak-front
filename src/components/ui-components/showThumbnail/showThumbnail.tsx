import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";

import { ENV } from "@/utils/const/main";
import resource from "@/utils/const/resources";
import { showThumbnailTypes } from "./showThumbnailTypes";

const ShowThumbnail: React.FC<PropsWithChildren<showThumbnailTypes>> = ({
  files,
}) => {
  let fileAdresses = files;
  let isFileExists: boolean = false;

  fileAdresses.forEach((item, index) => {
    let url = item.urlAddress.slice(1);
    const pathParts = item.urlAddress.split("/uploadFile/");
    const fileName = pathParts[1];

    if (fileName && fileName.trim()) {
      isFileExists = true;
    }
  });
  console.log(fileAdresses);

  const fileOpener = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex p-2 flex-wrap">
      {isFileExists ? (
        fileAdresses.map((item, index) => {
          let url = item.urlAddress.slice(1);

          const pathParts = item.urlAddress.split("/uploadFile/");
          const fileName = pathParts[1];

          if (fileName && fileName.trim()) {
            return (
              <div
                key={index}
                className="flex cursor-pointer border border-border-gray rounded-lg m-1"
                onClick={() => fileOpener(`${ENV.basePath}${url}`)}
              >
                <Image
                  src={`${ENV.basePath}${url}`}
                  alt="alt"
                  width={100}
                  height={100}
                />
              </div>
            );
          }
        })
      ) : (
        <p>{`${resource.file}${resource.y} ${resource.for} ${resource.show} ${resource.notExist}`}</p>
      )}
    </div>
  );
};

export default ShowThumbnail;
