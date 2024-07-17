import React, { PropsWithChildren } from "react";

const Component: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 translate-x-1/2 -translate-y-1/2">
        <div className="w-9 h-9  sm:w-11 sm:h-11 md:sm:w-12 md:h-12 lg:sm:w-14 lg:h-14  rounded-full  border-4 border-t-alis-primary animate-spin border-white"></div>
        {children}
      </div>
    </>
  );
};

export default Component;
