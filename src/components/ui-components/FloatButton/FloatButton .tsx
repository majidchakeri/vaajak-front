import React, { Children, PropsWithChildren } from "react";
import { FloatButtonTypes } from "./FloatButton";

const FloatButton: React.FC<PropsWithChildren<FloatButtonTypes>> = ({
  color,
  icon,
  onClick,
  children,
}) => {
  const primary = "blue-500";
  const secondary = "gray-900";
  const success = "green-500";
  const warning = "yellow-400";
  const danger = "red-500";
  const info = "teal-500";
  const white = "white";

  const colorPick = () => {
    switch (color) {
      case "primary":
        return primary;
      case "info":
        return info;
      case "danger":
        return danger;
      case "secondary":
        return secondary;
      case "success":
        return success;
      case "warning":
        return warning;
    }
  };

  return (
    <button
      className={`flex  bg-${colorPick()} text-white justify-center  w-14 h-14 shadow-2xl p-5 items-center rounded-full  bottom-9 right-9 z-10`}
      onClick={onClick}
    >
      {children}
      {icon && <div>{icon}</div>}
    </button>
  );
};

FloatButton.defaultProps = {
  color: "primary",
  icon: "",
};
export default FloatButton;
