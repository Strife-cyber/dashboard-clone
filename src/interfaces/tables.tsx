import { ReactNode } from "react";
import { useTable, useGlobalFilter, Column } from "react-table";
import { Table, Form, InputGroup, Button } from "react-bootstrap";
import Preview from "../components/preview";
import Interfaces from "./interfaces";

// Define the data structure
interface Data {
  id: number;
  name: string;
  age: number;
  job: string;
}

// Sample Data
const data: Data[] = [
  { id: 1, name: "Alice", age: 25, job: "Engineer" },
  { id: 2, name: "Bob", age: 30, job: "Designer" },
  { id: 3, name: "Charlie", age: 35, job: "Manager" },
  { id: 4, name: "Diana", age: 28, job: "Engineer" },
  { id: 5, name: "Eve", age: 22, job: "Intern" },
];

const columns: Column<Data>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Job", accessor: "job" },
];

// Global Filter Component
const GlobalFilter = ({
  globalFilter,
  setGlobalFilter,
}: {
  globalFilter: string | undefined;
  setGlobalFilter: (filterValue: string | undefined) => void;
}) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>Search:</InputGroup.Text>
      <Form.Control
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        placeholder="Type to search all columns"
      />
    </InputGroup>
  );
};

// Main Component
const Tables = ({ dark_mode = false }: { dark_mode?: boolean }) => {
  // Table with filtering
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
  } = useTable({ columns, data }, useGlobalFilter);

  return (
    <Interfaces
      dark_mode={dark_mode}
      heading="Tables"
      links={
        <div className="d-flex gap-3">
          <a href="https://react-table.tanstack.com/">Home</a> /{" "}
          <a href="https://react-table.tanstack.com/docs/quick-start">Docs</a>
        </div>
      }
    >
      {/* Preview 1: Table with Global Filtering */}
      <Preview
        dark_mode={dark_mode}
        code_href="https://react-table.tanstack.com/docs/quick-start"
        heading="Table with Global Filtering"
        description="A table that allows users to filter across all columns using a global search input."
      >
        <GlobalFilter
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Table striped bordered hover responsive {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Preview>

      {/* Preview 2: Simple Responsive Table */}
      <Preview
        dark_mode={dark_mode}
        code_href="https://react-bootstrap.github.io/components/table"
        heading="Simple Responsive Table"
        description="A basic responsive table displaying data without additional features."
      >
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.accessor as string}>{col.Header as ReactNode}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Preview>

      {/* Preview 3: Table with Actions */}
      <Preview
        dark_mode={dark_mode}
        code_href="https://react-bootstrap.github.io/components/buttons"
        heading="Table with Actions"
        description="A table showcasing actionable buttons in a column."
      >
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.accessor as string}>{col.Header as ReactNode}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
                <td>
                  <Button variant="info" size="sm">
                    View
                  </Button>{" "}
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Preview>

      {/* Preview 4: Sorted Table */}
      <Preview
        dark_mode={dark_mode}
        code_href="https://react-table.tanstack.com/docs/api/useSortBy"
        heading="Sorted Table"
        description="A table sorted by age in ascending order."
      >
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice()
              .sort((a, b) => a.age - b.age)
              .map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.job}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Preview>

      {/* Preview 5: Highlighted Rows */}
      <Preview
        dark_mode={dark_mode}
        code_href="https://react-bootstrap.github.io/components/table"
        heading="Highlighted Rows"
        description="Rows are highlighted with a warning background if the age is over 30."
      >
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className={row.age > 30 ? "table-warning" : ""}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Preview>
    </Interfaces>
  );
};

export default Tables;
