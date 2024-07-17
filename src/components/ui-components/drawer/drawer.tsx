"use client";

import React from "react";

import { DrawerProps } from "@/components/usefulComponents/drawer/drawerTypes";

const Drawer: React.FC<DrawerProps> = ({ title, children, footer }) => {
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 sm:w-1/2 md:w-1/6  z-50 h-screen p-8 bg-gray-100 w-64 dark:bg-gray-800"
      aria-labelledby="drawer-navigation-label"
    >
      <div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="pt-20">{children}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default Drawer;
