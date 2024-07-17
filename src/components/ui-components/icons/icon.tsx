// import {
//   X,
//   Copy,
//   ClipboardCheck,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react"

// export const Icons = {
//   close: X,
//   copy: Copy,
//   chevronLeft: ChevronLeft,
//   chevronRight: ChevronRight,
// }

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import { IconsComponentPropType } from "./icons";

const Icon = ({ name, ...props }: IconsComponentPropType) => {
  const LucideIcon = useMemo(() => dynamic(dynamicIconImports[name]), [name]);

  return <LucideIcon {...props} />;
};

export default Icon;

// import React, { useMemo } from "react";
// import dynamic from "next/dynamic";
// import dynamicIconImports from "lucide-react/dynamicIconImports";

// const Icon = ({ name, ...props }) => {
//   const LucideIcon = useMemo(() => dynamic(dynamicIconImports[name]), [name]);

//   console.log("icon log", name);
//   console.log("icon log", { ...props });

//   return <LucideIcon {...props} />;
// };

// export default Icon;
