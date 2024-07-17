import { ReactNode } from "react";

export type ToastTypes = {
  variant: "success" | "danger" | "info" | "secondary";
  children: ReactNode;
};
