import React, { useState } from "react";
import Icon from "../icons/icon";
import { ToastTypes } from "./toastTypes";

const Toast = ({ variant = "success", children  }: ToastTypes) => {
  const [state, setState] = useState<boolean>(true);
  const baseClass =
    "flex justify-between  items-center rounded-lg py-2 px-12  z-10 top-0 right-0 w-full mt-5 ";

  const variantClassMap = {
    success: "bg-toast-success text-toast-text-success",
    danger: "bg-toast-danger text-toast-text-danger",
    info: "bg-toast-info text-toast-text-info",
    secondary: "bg-toast-secondary text-toast-text-secondary",
  };

  const variantClass = variantClassMap[variant] || "";
  setTimeout(() => {
    setState(false);
  }, 5000);
  return (
    state && (
      <div className="fixed right-0 top-0 w-screen h-screen">
        <div className={`${baseClass} ${variantClass} h-auto sm:h-10 lg:h-14 `}>
          <div className="flex items-center space-x-2 ">
            <Icon name="door-closed" />
          </div>
          <div className="text-xs md:text-base">{children}</div>
          <div className="cursor-pointer" onClick={() => setState(false)}>
            <Icon name="circle-x" color="#606060" />
          </div>
        </div>
      </div>
    )
  );
};

export default Toast;
