import { ReactNode } from "react";

export type AccordionItemTypes = { question: string; answer: string }[];
type AccordionProps = {
  items: AccordionItemTypes;
};

export type AccordionPanelTypes = {
  onShow?: () => void;
  header?: string;
  body?: ReactNode;
  isActive?: number | boolean;
};
