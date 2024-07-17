import React, { PropsWithChildren, useRef, useState } from "react";
import useClickOutside from "@/utils/hooks/UseClickOutSide";

import Icon from "../icons/icon";

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useClickOutside(modalRef, () => setIsOpen(false));
  const openToggler = () => {
    setIsOpen(!isOpen);
  };
  return (
    isOpen && (
      <>
        <div className="fixed w-full h-full z-10 left-0 top-0 bg-black/[.4] backdrop-blur-sm"></div>
        <div
          className="absolute  left-1/2 -translate-x-1/2 top-10  bg-white rounded-lg flex flex-col items-center overflow-auto w-5/6 md:w-2/3  h-3/4 z-20 "
          ref={modalRef}
        >
          <div className="w-full flex justify-start p-2 border-b border-blue-200">
            <span onClick={() => openToggler()} className="btn">
              <Icon name="x"></Icon>
            </span>
          </div>
          <div className="p-2 w-full">{children}</div>
        </div>
      </>
    )
  );
};

export default Modal;
