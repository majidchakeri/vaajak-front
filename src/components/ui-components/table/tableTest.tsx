"use client";

import { useState } from "react";

import "@/app/globals.css";

import {
  TableComponentPropType,
  InitialStateTypes,
} from "@/components/usefulComponents/table/tableTypes";

const Component = ({
  tableColumns,
  dataSource,
  pagination,
}: TableComponentPropType) => {
  // const [currentPage, setCurrentPage] = useState(pagination && pagination.current );
  // const [itemsPerPage, setItemsPerPage] = useState(pagination&& pagination.pageSize);

  const initialState: InitialStateTypes = {
    currentPage: pagination ? pagination.pageIndex : 1,
    // itemsPerPage: pagination ? pagination.pageSize : 10,
    itemsPerPage:  10,
  };

  const [state, setState] = useState(initialState);

  const { currentPage, itemsPerPage } = state;

  // Calculate the last item index on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pagination
    ? dataSource?.slice(indexOfFirstItem, indexOfLastItem)
    : dataSource;

  // Change page handler
  const totalPages = pagination
  ? Math.ceil(pagination.totalPages / itemsPerPage)
  : 0;

  const paginate = (pageNumber: number) => {
    setState((prev) => ({ ...prev, currentPage: pageNumber }));
  };

  // const handleHeaderCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setState((pervState) => ({...pervState, isAllChecked: e.target.checked}));

  //   // setIsAllChecked(e.target.checked);
  // };

  // const handleRowCheckboxChange = (index, e) => {
  //   // Logic to handle individual row checkbox changes
  //   // This could involve updating an array of checked statuses, for example
  // };

  return (
    <div className="overflow-x-auto flex justify-center">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            {/* <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isAllChecked}
                  onChange={handleHeaderCheckboxChange}
                />
              </label>
            </th> */}
            {tableColumns?.map((item, i) => {
              return (
                <th key={i}>
                  <label key={i}>{item.title}</label>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {dataSource?.map((item, i) => {
            return (
              <tr key={i}>
                {/* <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={isAllChecked}
                      onChange={(e) => handleRowCheckboxChange(i, e)}
                    />
                  </label>
                </td> */}
                {tableColumns?.map((column, j) => {
                  // get the dataIndex of the column
                  // const dataIndex = column.dataIndex;
                  // get the value of the item for that dataIndex
                  // const value = item.name;
                  // if (dataIndex == value) {
                  //   return <td key={j}>{item.name}</td>;
                  // }
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
                  // get the className of the column
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
      {pagination && (
        <div className="pagination">
          {[...Array(totalPages).keys()]?.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={currentPage === number + 1 ? "active " : "a"}
            >
              {number + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Component;
