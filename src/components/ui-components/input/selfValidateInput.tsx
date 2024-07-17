// import React, { useState } from "react";
// import Icon from "../icons/icon";

// const Input = ({
//   label,
//   name,
//   id,
//   type = "text",
//   register,
//   errors,
//   doValidate,
//   onChange,
//   iconName = "",
//   placeHolder,
// }) => {
//   const initialState = {
//     inputValue: "",
//     inputType: type,
//     isShow: false,
//   };
//   const [state, setState] = useState(initialState);
//   const { inputValue, inputType, isShow } = state;
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setState((prev) => ({ ...prev, inputValue: e.target.value }));
//     // if (onChange) {
//     //   onChange(e);
//     // }
//   };
//   const resetValue = () => {
//     setState((prev) => ({ ...prev, inputValue: "" }));
//   };
//   const toggleShowPassword = () => {
//     setState((prev) => ({
//       ...prev,
//       isShow: !isShow,
//     }));
//   };

//   return (
//     <div className="">
//       {label && <label htmlFor={id}>{label}</label>}
//       <div className="flex flex-row items-center  w-full border md:border-2 rounded-lg bg-white">
//       {iconName && (
//             <span className="m-2 px-1">
//               <Icon name={iconName} />
//             </span>
//           )}
//         <div className="flex flex-col">
//           <input
//             type={isShow ? "text" : inputType}
//             name={name}
//             onChange={handleInputChange}
//             placeholder={placeHolder}
//             id={id}
//             {...register(name, doValidate)}
//             className="border-2 border-blue-300"
//           />
//           {inputValue && type === "text" ? (
//             <span className="  cursor-pointer m-2 px-1" onClick={resetValue}>
//               <Icon name="x" />
//             </span>
//           ) : type === "password" ? (
//             <span
//               className="  cursor-pointer m-2 px-1"
//               onClick={toggleShowPassword}
//             >
//               <Icon name={isShow ? "eye" : "eye-off"} />
//             </span>
//           ) : (
//             <span></span>
//           )}

//           {errors[name] && (
//             <span className="text-red-600">{errors[name]?.message}</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Input;
