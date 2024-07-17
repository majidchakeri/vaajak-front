import { useRouter } from "next/router";
import React from "react";
import Icon from "@/components/usefulComponents/icons/icon";
import Link from "next/link";

import { breadCrumbItems } from "@/components/usefulComponents/breadCrumb/breadCrumbItems";
import { translateBreadcrumbRoutes } from "./breadCrumbTranslator";

const BreadCrumb = () => {
  function keepFirstAndLast(arr: any[]) {
    if (arr.length <= 2) {
      return arr;
    }
    return [arr[0], arr[arr.length - 1]];
  }

  const router = useRouter();
  const pureRoute = router.pathname
    .split("/")
    .filter((el) => el)
    .filter((route) => !route.includes("[[...slug]]"));
  let breadRoutes = keepFirstAndLast(pureRoute);
  let breadCrumbPath = "";
  const translatedRoutes = translateBreadcrumbRoutes(
    breadRoutes,
    breadCrumbItems
  );

  return (
    <div className="flex items-center">
      {translatedRoutes?.map((segment, index) => {
        const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1);
        breadCrumbPath += `/${segmentName}`;
        const isLast = index === translatedRoutes.length - 1;

        return isLast ? (
          <div key={index}>
            <span className="text-alis-primary  alis-overline-sm md:alis-overline-lg mx-1">
              {segment}
            </span>
          </div>
        ) : (
          <>
            <div className="flex items-center mx-1">
              <Link href={"/"}>
                <span className="text-alis-gray-light alis-overline-sm md:alis-overline-lg">
                  {segment}
                </span>
              </Link>
              <span className="text-alis-primary mx-1">
                <Icon name="chevron-left" size={15} />
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
