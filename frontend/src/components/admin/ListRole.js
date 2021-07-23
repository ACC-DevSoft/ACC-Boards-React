import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {
  Add,
  DeleteOutline,
  Edit,
  ZoomOutMapSharp,
  Search,
} from "@material-ui/icons";
import MaterialTable from "material-table";
import useStyles from "./styleListRole";

axios.defaults.baseURL = "http://localhost:3025/api";

const columnas = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Description",
    field: "description",
  },
  {
    title: "Status",
    field: "status",
  },
  {
    title: "Creation Date",
    field: "date",
  },
];

const ListRole = () => {
  const classes = useStyles();

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("/role/listRole")
      .then((res) => {
        setData(res.data.roles);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <hr></hr>

      <h4>Total roles: {data.length}</h4>
      <Button>
        <Add aria-hidden="false" color="accent" /> Add role
      </Button>

      <div>
        <MaterialTable
          className={classes.table}
          columns={columnas}
          data={data}
          title="List of roles"
          pageSize={4}
          // actions={[
          //   {
          //     icon: Edit,
          //     tooltip: "Edit Role",
          //     onClick: (event, rowData) =>
          //       alert("You want to edit the user: " + rowData.name),
          //   },
          //   {
          //     icon: DeleteOutline,
          //     tooltip: "Delete Role",
          //     onClick: (event, rowData) =>
          //       window.confirm(
          //         "Are you sure tou want Delete de Role: " + rowData.name
          //       ),
          //   },
          // ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </>
  );
};

export default ListRole;
