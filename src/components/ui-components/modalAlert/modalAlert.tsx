import React, { PropsWithChildren, useState } from "react";
import Icon from "@/components/usefulComponents/icons/icon";
import resource from "@/utils/const/resources";
import Button from "@/components/usefulComponents/button/button";
// import { ModalAlertPropsTypes } from "./modalAlert";

const ModalAlert = ({
  name,
  children,
  message,
  title,
  onClose,
  buttonVariant = "info",
}: {
  message?: string;
  title?: string;
  name?: string;
  children?: any;
  buttonVariant?:
    | "success"
    | "info"
    | "primary"
    | "warning"
    | "white"
    | "orange";
  onClose: () => void;
}) => {
  // const [state, setState] = useState<boolean>(true);
  // const modalCloser = () => {
  //   setState(false);
  // };

  return (
    <div
      className="fixed left-0 top-0 w-screen h-screen z-10 justify-center items-center flex bg-black/[.4] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center justify-between w-80 min-h-44 text-sm md:text-md  md:w-[438px] text-modal-text py-7 px-2
         md:min-h-[236px] bg-white rounded-2xl shadow-md md:shadow-lg overflow-auto max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between w-full items-center px-2 ">
          <p className="flex-1 text-center alis-h5">
            {/* {resource.cancel} {resource.programm} */}
            {title}
          </p>
          <span className="text-modal-icon cursor-pointer" onClick={onClose}>
            <Icon name="square-x" color="#353535" />
          </span>
        </div>
        <div className="p-2">
          {message}
          {/* {resource.doyou} {resource.remove} {name} {resource.sure}{" "} */}
        </div>
        <div className="px-4 py-2 overflow-auto">{children}</div>
        <div className="flex justify-center w-full gap-x-3 pt-1 items-center">
          <div className="basis-1/3">
            <Button variant={buttonVariant}>{resource.confirm}</Button>
          </div>
          <div className="basis-1/3">
            <Button variant={'danger'}>{resource.cancel}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
