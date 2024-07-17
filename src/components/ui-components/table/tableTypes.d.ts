import { bool } from "yup";

export type InitialStateTypes = {
  currentPage: number;
  itemsPerPage: number;
  // isAllChecked: boolean;
};

export type TableHeader = Array<{
  title: string;
  dataIndex: string;
  className: string;
  render?: (value: any) => React.ReactNode;
}>;

export type TableData = Array<{
  index: string;
  name: string;
  family: string;
  age: string;
  [key: string]: string;
}>;

export type TablePagination =
  | {
    pageIndex: number;
    totalPages: number;
    totalCount: number;
    }
  | false;

export type DataSourceType = {
  userId: string;
  index: string;
  name: string;
  family: string;
  age: string;
  phoneNumber: string;
  confirmStatus: string;
};

export type TableComponentPropType = {
  tableColumns?: TableHeader;
  dataSource?: TableData;
  pagination?: TablePagination;
};
