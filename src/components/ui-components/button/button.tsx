import React, { ReactNode, MouseEvent, PropsWithChildren } from "react";
import { ButtonProps, DynamicColorTypes } from "./buttonTypes";
import Icon from "../icons/icon";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  variant = "success",
  children,
  icon,
  disabled,
  type = "button",
  onClick,
  shape,
}) => {
  const baseStyle =
    " flex w-full alis-body-sm rounded-lg py-2 px-4 items-center justify-center box-border transition-all duration-200 ease-in-out break-words";
  const dynamicColor: { [key in ButtonProps["variant"]]: string } = {
    success: "bg-alis-primary hover:bg-alis-darkgreen text-alis-btntext ",
    info: "bg-alis-iceblue-light hover:bg-alis-iceblue text-alis-navy-blue ",
    primary: "bg-alis-blue hover:bg-alis-darkblue text-alis-btntext ",
    warning:
      "bg-alis-brown-extralight hover:bg-alis-dark-gold text-alis-brown-light hover:text-alis-brown",
    white: "bg-none hover:bg-alis-hover-color",
    danger: "bg-alis-red-light hover:bg-alis-red-hover text-alis-red",
    orange: "bg-alis-secondary  hover:bg-alis-secondary-hover text-white",
  };
  let btnVariant = dynamicColor[variant];

  return (
    <button
      className={`${baseStyle} ${btnVariant} ${disabled ? "opacity-50" : ""} `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "success",
  disabled: false,
  type: "button",
};

export default Button;
