// import React from "react";
// import { useFormContext } from "react-hook-form";

// const Input = ({ name, label, placeholder, type = "text" }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div>
//       {label && <label htmlFor={name}>{label}</label>}
//       <input
//         type={type}
//         placeholder={placeholder}
//         {...register(name, { required: true })}
//       />
//       {errors[name] && <span>This field is required</span>}
//     </div>
//   );
// };

// export default Input;
