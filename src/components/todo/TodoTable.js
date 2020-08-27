import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";

const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Created Date",
      accessor: "create_date",
    }

  ];

  
  function TodoTable({ data, onHandleEdit, onHandleDelete}) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
        initialState: {
          pageSize: 10,
          pageIndex: 1,
        },
      },
      useSortBy,
      usePagination
    );
  
    return (
      <>
        <div style={{ overflowX: "auto" }}>
          <table {...getTableProps()} className="table">
            <thead className="thead-light">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                  <th></th>
                  <th></th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                     <td><button type="button" className="btn btn-primary" value={row?.original._id} onClick={onHandleEdit}>Edit</button></td>
                     <td><button type="button" className="btn btn-danger" value={row?.original._id} onClick={onHandleDelete}>Delete</button></td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  export default TodoTable;