import React, { PropsWithChildren, useState } from "react";
import { AccordionPanelTypes } from "./accordionTypes";
import Icon from "../icons/icon";

const AccordionPanel: React.FC<PropsWithChildren<AccordionPanelTypes>> = ({
  isActive,
  header,
  body,
  children,
  onShow,
}) => {
  console.log("active ", isActive);

  return (
    <section className=" w-full cursor-pointer px-1 " onClick={onShow}>
      <div className="flex items-center alis-body-md text-alis-sidebar-background ">
        {!isActive ? (
          <span className="px-4 ">
            <Icon name="square-plus" size={22} />
          </span>
        ) : (
          <span className="text-alis-primary px-4">
            <Icon name="square-minus" size={22} />
          </span>
        )}
        <h3>{header}</h3>
      </div>
      {isActive && (
        <div className=" alis-body-sm text-alis-accordion py-3 px-8">
          <div className="border-r-2  border-alis-primary px-2">{body}</div>
        </div>
      )}
    </section>
  );
};

export default AccordionPanel;
