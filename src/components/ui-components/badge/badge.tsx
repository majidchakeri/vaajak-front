import React from "react";

const Badge = ({ children }: any) => {
  return (
    <>
      <span className="absolute top-2 left-1 h-2 w-2 bg-orange-500 rounded-full p-3 text-white flex justify-center items-center ">
        {children}
      </span>
    </>
  );
};

export default Badge;
