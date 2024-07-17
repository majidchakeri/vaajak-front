import React, { PropsWithChildren, useState, ChangeEvent } from "react";
import { InputProps } from "./inputTypes";
import Icon from "../icons/icon";

const Input: React.FC<PropsWithChildren<InputProps>> = ({
  type = "text",
  onChange,
  iconName = "",
  name,
  id,
  label = "",
  placeHolder,
  register,
  validation,
  border,
}) => {
  const initialState = {
    inputValue: "",
    inputType: type,
    isShow: false,
  };
  const [state, setState] = useState(initialState);
  const { inputValue, inputType, isShow } = state;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, inputValue: e.target.value }));
    // if (onChange) {
    //   onChange(e);
    // }
  };

  const resetValue = () => {
    setState((prev) => ({ ...prev, inputValue: "" }));
  };

  const toggleShowPassword = () => {
    setState((prev) => ({
      ...prev,
      isShow: !isShow,
    }));
  };
  const borderStyle = `${!border == null ? `border-${border}` : "border"}`;

  return (
    <div className="flex justify-between w-full box-border  h-8 sm:h-10 md:h-12">
      <div className="flex flex-col w-full ">
        {label && <label htmlFor={id}>{label}</label>}
        <div className="flex flex-row items-center  w-full border md:border rounded-lg bg-white">
          {iconName && (
            <span className="m-2 px-1">
              <Icon name={iconName} />
            </span>
          )}
          <input
            className={`w-full h-8 sm:h-10 md:h-12 p-2 outline-none text-black ${borderStyle}`}
            type={isShow ? "text" : inputType}
            id={id}
            name={name}
            {...(register ? register(name, validation) : {})}
            onChange={handleInputChange}
            placeholder={placeHolder}
            value={inputValue}
          />
          {inputValue && type === "text" ? (
            <span className="  cursor-pointer m-2 px-1" onClick={resetValue}>
              <Icon name="x" />
            </span>
          ) : type === "password" ? (
            <span
              className="  cursor-pointer m-2 px-1"
              onClick={toggleShowPassword}
            >
              <Icon name={isShow ? "eye" : "eye-off"} />
            </span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};
Input.defaultProps = {
  register: null,
};
export default Input;
