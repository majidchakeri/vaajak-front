import React, { ReactNode, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import Icon from "../icons/icon";
import Button from "@/components/usefulComponents/button/button";
import { ToastTypes } from "./toastTypes";

const HotToast = ({ variant = "success", children }: ToastTypes) => {
  const baseClass =
    "flex justify-between  items-center rounded-lg py-2 px-12  z-10 top-0 right-0 w-8/12 mt-5 ";

  const variantClassMap = {
    success: "bg-toast-success text-toast-text-success",
    danger: "bg-toast-danger text-toast-text-danger",
    info: "bg-toast-info text-toast-text-info",
    secondary: "bg-toast-secondary text-toast-text-secondary",
  };
  const variantClass = variantClassMap[variant] || "";

  const notify = useCallback(() => {
    toast.custom((t) => (
      <div className={`${baseClass} ${variantClass}`}>
        {children}
        <Icon
          name="circle-x"
          onClick={() => toast.remove(t.id)}
          className="size-8 flex items-center justify-center rounded-full border-2 "
        />
        {/* ✖ */}
      </div>
    ));
  }, [baseClass, variantClass, children]);

  return (
    <div>
      <button onClick={notify}>make</button>
      <Toaster />
    </div>
  );
};

export default HotToast;
