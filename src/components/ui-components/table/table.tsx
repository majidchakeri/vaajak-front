import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router"; // Import useRouter
import "@/app/globals.css";
import {
  TableComponentPropType,
  InitialStateTypes,
} from "@/components/usefulComponents/table/tableTypes";
import { useDispatch, useSelector } from "react-redux";
import selectedUsers, { addUser } from "@/lib/features/tableUsersSlice";
import Icon from "../icons/icon";
import { number } from "yup";
import { InitialStateTicketList } from "@/utils/types/ticketTypes";

interface Props extends TableComponentPropType {
  checkedState: {
    allChecked: boolean;
    checkedItems: any[];
  };
  onCheckChange: (checkedState: {
    allChecked: boolean;
    checkedItems: any[];
  }) => void;
}

const Component = ({
  tableColumns,
  dataSource = [],
  pagination,
  checkedState,
  onCheckChange,
}: Props) => {
  const router = useRouter();
  const { pathname, query } = router;

  const initialState: InitialStateTypes = {
    currentPage: parseInt(query.pageIndex as string) || 1, // Use the query parameter if available
    itemsPerPage: 10,
  };
  const [state, setState] = useState(initialState);
  const { itemsPerPage, currentPage } = state;

  const dispatch = useDispatch();

  const handleHeaderCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;
    const items = checked ? [...dataSource] : [];
    const newCheckedState = { allChecked: checked, checkedItems: items };
    onCheckChange(newCheckedState);
    dispatch(addUser(items));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = pagination
    ? Math.ceil(pagination.totalCount / itemsPerPage)
    : 0;

  const paginate = (pageNumber: number) => {
    setState((prev) => ({ ...prev, currentPage: pageNumber }));
    router.push({
      pathname,
      query: { ...query, pageIndex: pageNumber },
    });
  };

  useEffect(() => {
    if (query.pageIndex) {
      setState((prev) => ({
        ...prev,
        currentPage: parseInt(query.pageIndex as string),
      }));
    }
  }, [query.pageIndex]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className={`border-[1.5px] mx-[2px] border-table-border size-8 rounded-lg flex items-center justify-center ${
            currentPage === 1 ? "bg-alis-primary text-white border-0" : ""
          }`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span
            key="start-ellipsis"
            onClick={() => paginate(Math.max(1, currentPage - 5))}
            className="cursor-pointer"
          >
            ...{" "}
          </span>
        );
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      pageNumbers.push(
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`border-[1.5px] mx-[2px] border-table-border size-8 rounded-lg flex items-center justify-center ${
            currentPage === number ? "bg-alis-primary text-white border-0" : ""
          }`}
        >
          {number}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span
            className="cursor-pointer"
            key="end-ellipsis"
            onClick={() => paginate(Math.min(totalPages, currentPage + 5))}
          >
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`border-[1.5px] mx-[2px] border-table-border size-8 rounded-lg flex items-center justify-center ${
            currentPage === totalPages
              ? "bg-alis-primary text-white border-0"
              : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  const handleRowCheckboxChange = (
    index: number,
    item: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;
    const updatedItemChecked = checked
      ? [...checkedState.checkedItems, item]
      : checkedState.checkedItems.filter((i) => i !== item);
    const allChecked = updatedItemChecked.length === dataSource.length;
    const newCheckedState = {
      allChecked: allChecked,
      checkedItems: updatedItemChecked,
    };
    onCheckChange(newCheckedState);
    dispatch(addUser(updatedItemChecked));
  };

  return (
    <div className="flex flex-col justify-start items-start pb-16 mt-4 overflow-auto">
      <table className="table w-full box-border overflow-auto">
        <thead className="border border-l-0 border-r-0 border-table-border ">
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkedState?.allChecked}
                  onChange={handleHeaderCheckboxChange}
                />
              </label>
            </th>
            {tableColumns?.map((item, i) => (
              <th key={i}>
                <label key={i}>{item.title}</label>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((item, i) => {
            const itemIndex = indexOfFirstItem + i;
            return (
              <tr
                key={i}
                className="hover:bg-table-row-bg rounded-md transition-all duration-300  border-0 "
              >
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={checkedState?.checkedItems.includes(item)}
                      onChange={(e) =>
                        handleRowCheckboxChange(itemIndex, item, e)
                      }
                    />
                  </label>
                </td>
                {tableColumns?.map((column, j) => {
                  if (column.title.includes(".")) {
                    const itemSplit = column.title.split(".");
                    return (
                      <td key={j}>{item[itemSplit[0]][itemSplit[1] as any]}</td>
                    );
                  }
                  if (column.render) {
                    return (
                      <td
                        key={j}
                        className={column.className}
                        data-record={item}
                      >
                        {column.render?.(item)}
                      </td>
                    );
                  }
                  return (
                    <td key={j} className={column.className}>
                      {item[`${column.dataIndex}`]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center w-full">
        {pagination && (
          <div>
            <div className="flex justify-center w-full">
              {pagination && (
                <div className="pagination mt-5 flex flex-row-reverse flex-wrap">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className={`${
                      currentPage <= 1 ? "opacity-5" : ""
                    } flex items-center justify-center`}
                  >
                    <Icon name="chevron-left" />
                  </button>
                  {renderPageNumbers()}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className={`${
                      currentPage >= totalPages ? "opacity-5" : ""
                    } flex items-center justify-center`}
                  >
                    <Icon name="chevron-right" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Component;
