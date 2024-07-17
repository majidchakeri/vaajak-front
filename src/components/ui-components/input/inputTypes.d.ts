import { ReactNode } from "react";

export type InputProps = {
  type?: string;
  onChange?: () => void;
  iconName?: string | "x" | IconsComponentPropType;
  name?: string;
  id?: string;
  label?: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  placeHolder?: string;
  register?: ReturnType<typeof useForm>["register"];
  validation?: object;
  border?: 1 | 2 | 4 |boolean;
};

export type SelfValidateInputTypes = {
  label?: string;
  name: string;
  id?: string;
  type?: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  doValidate?: RegisterOptions;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  iconName?: string;
  placeHolder?: string;
};
