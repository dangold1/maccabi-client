import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const fields = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "username", headerName: "Username", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
  },
];

export default function DataTable({ data }) {

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={fields} pageSize={5} checkboxSelection />
    </div>
  );
}
