export type ButtonTypes = {
  primary?: string;
  secondary?: string;
  success?: string;
  danger?: string;
};

export type ButtonShape = {
  primary: string;
  dashed: string;
  circle: string;
  round: string;
  text: string;
  link: string;
};
export type DynamicColorTypes = {
  success: string;
  info: string;
  primary: string;
  warning: string;
};
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant: "success" | "info" | "primary" | "warning" | "white" |'orange';
  shape?: string;
  icon?: React.ReactNode;
};

export type buttonTypes = {
  primary?: string;
  secondary?: string;
  success?: string;
  warning?: string;
  danger?: string;
  rounded?: string;
};
