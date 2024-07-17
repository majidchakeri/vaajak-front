export type StatusIcon = "search" | "square-check" | "circle-x";
export type StatusLabel =
  | "در حال بررسی "
  | "تائید شده"
  | "تائید نشده"
  | "پاسخ داده شده";

export type StatusItem = {
  itemStatus: 1 | 2 | 3 | 4;
  label: StatusLabel;
  icon: StatusIcon;
};
