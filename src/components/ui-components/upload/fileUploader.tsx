import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import Icon from "../icons/icon";
import resource from "@/utils/const/resources";
import { Types } from "@/utils/const/main";

type InitialStateTypes = {
  files: FileList | null;
  onDrag: boolean;
  error: string;
};
type FileUploaderTypes = {
  onDraged: () => void;
};

const FileUploader: React.FC<PropsWithChildren<FileUploaderTypes>> = ({
  onDraged, // transter data to parent using this  callback function
}) => {
  const initialState: InitialStateTypes = {
    files: null,
    onDrag: false,
    error: "",
  };
  const Max_File_Size = 10 * 1024 * 1024; // 10MB
  const [state, setState] = useState(initialState);
  const { files, onDrag, error } = state;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setState((prev) => ({ ...prev, onDrag: true }));
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const file = droppedFiles[0];
      if (!Types.uploadImageFormats.includes(file.type)) {
        setState((prev) => ({
          ...prev,
          error: "فرمت عکس نامعتبر است",
          onDrag: false,
        }));
        return;
      }
      if (file.size > Max_File_Size) {
        setState((prev) => ({
          ...prev,
          error: " حجم فایل بیشتر از10 مگابایت است",
          onDrag: false,
        }));
        return;
      }
      setState((prev) => ({
        ...prev,
        files: droppedFiles,
        onDrag: false,
        error: "",
      }));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const file = selectedFiles[0];
      if (!Types.uploadImageFormats.includes(file.type)) {
        setState((prev) => ({
          ...prev,
          error: "فرمت عکس نامعتبر است",
        }));
        return;
      }
      if (file.size > Max_File_Size) {
        setState((prev) => ({
          ...prev,
          error: " حجم فایل بیشتر از10 مگابایت است",
        }));
        return;
      }
      setState((prev) => ({
        ...prev,
        files: selectedFiles,
        error: "",
      }));
    }
  };

  return (
    <div
      className={`flex flex-col rounded-lg items-center justify-center border border-border-gray bg-white cursor-pointer ${
        onDrag ? "opacity-50" : "opacity-100"
      }`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <div className="w-full text-alis-blue flex alis-h6 px-2 py-4">
        <div className="px-1">
          <Icon name="image" />
        </div>
        {`${resource.upload} ${resource.documents}`}
      </div>
      <div className="w-full flex flex-col items-center pb-5">
        <Icon name="cloud-upload" size={50} strokeWidth={1} />
        <span className="text-alis-brown-light">Maximum size: 10MB</span>
      </div>
      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        onChange={handleChange}
      />
      {error && <div className="error">{error}</div>}
      {files && (
        <div>
          <ul>
            {Array.from(files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
