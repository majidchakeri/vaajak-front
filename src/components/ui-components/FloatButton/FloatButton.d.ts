export type FloatButtonTypes = {
  children: ReactNode;
  icon: ReactNode;
  color: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  onClick?: event;
};
