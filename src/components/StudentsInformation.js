import React, { useContext } from "react";
import { useTable } from "react-table";
import { GlobalContext } from "../data/GlobalContextProvider";

function StudentsInformation() {
  const { students } = useContext(GlobalContext);
  const data = React.useMemo(
    () =>
      students.map((student) => ({
        col1: student.id,
        col2: student.name,
        col3: student.age,
        col4: student.city,
      })),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "№",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Student Name",
        accessor: "col2", // accessor is the "key" in the data
      },
      {
        Header: "Age",
        accessor: "col3",
      },
      {
        Header: "City",
        accessor: "col4",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="studentsInfo">
      <h2 className="pageHeader">List of all Students</h2>
      <table {...getTableProps()} className="studentsTable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="tableHeader">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="tableCell">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsInformation;
