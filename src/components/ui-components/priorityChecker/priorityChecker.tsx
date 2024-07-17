import React from "react";

type PriorityTypeId = 1 | 2 | 3 | number;

type PriorityCheckerTypes = {
  priorityTypeId: PriorityTypeId;
};

const PriorityChecker = ({ priorityTypeId }: PriorityCheckerTypes) => {
  const baseStyle =
    " rounded-xl flex items-center justify-center alis-bage p-1 font-poppins size-8 md:size-10 ";

  const dynamicVariants: Record<PriorityTypeId, string> = {
    3: "border-2 border text-alis-red bg-alis-red-light border-alis-red",
    2: "border-2 border text-alis-secondary bg-alis-secondary-light border-alis-secondary",
    1: "border-2 border text-alis-green bg-alis-green-light border-alis-green",
  };

  const dynamicStyles = dynamicVariants[priorityTypeId];

  return (
    <div className={`${baseStyle}${dynamicStyles}`}>{`${
      priorityTypeId == null ? "--" : "P" + priorityTypeId
    }`}</div>
  );
};

export default PriorityChecker;
