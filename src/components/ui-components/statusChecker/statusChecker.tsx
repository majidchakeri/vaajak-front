import React from "react";
import Icon from "../icons/icon";

import { StatusItem } from "./statusCheckerTypes";

const StatusChecker = ({ status }: { status: number | string}) => {
  const baseStyle =
    "border flex items-center justify-between rounded-xl px-2 py-1 alis.badge ";
  const dynamicStatus: StatusItem[] = [
    { itemStatus: 1, label: "در حال بررسی ", icon: "search" },
    { itemStatus: 2, label: "تائید شده", icon: "square-check" },
    { itemStatus: 3, label: "تائید نشده", icon: "circle-x" },
    { itemStatus: 4, label: "پاسخ داده شده", icon: "circle-x" },
  ];

  let filteredItem = dynamicStatus.filter((item) => item.itemStatus === status);
  const statusTwoVariant = "text-alis-primary border-alis-primary";
  const statusOneVariant = "text-alis-gray-light border-alis-gray-light";
  const statusThreeVariant = "text-alis-red border-alis-red";
  const statusFourVariant = "text-alis-primary border-alis-primary";

  return (
    <div>
      {filteredItem.map((item) => (
        <div
          key={item.itemStatus}
          className={`${baseStyle} ${
            status == 2
              ? statusTwoVariant
              : status == 1
              ? statusOneVariant
              : status == 3
              ? statusThreeVariant
              : status == 4
              ? statusFourVariant
              : ""
          } `}
        >
          <Icon name={item.icon} size={20} strokeWidth={1.25} />
          <span className="px-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusChecker;
