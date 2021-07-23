import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Add, DeleteOutline, Edit, ZoomOutMapSharp } from "@material-ui/icons";
import MaterialTable from "material-table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import useStyles from "./styleListRole";


const baseUrl = "http://localhost:3025/api/user/listUsers";

const columnas = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Email",
    field: "email",
  },
  {
    title: "Role",
    field: "roleId.name",
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

axios.defaults.baseURL = "http://localhost:3025/api";

const ListUsers = () => {
  const classes = useStyles();
  

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async() => {
    await axios
      .get("/user/listUsers")
      .then((res) => {
        setData(res.data.users);
        console.log(res.data.users.length);
        console.log(data)
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setloading(false);
    });
  };

  useEffect(async() => {
    await fetchData();
  }, []);

  let z = data[1];
  console.log(z);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <hr></hr>

      <h4>Total Users: {data.length}</h4>
      <Button>
        <Add aria-hidden="false" color="accent" /> Add User
      </Button>

      <div>
        <MaterialTable
          className={classes.table}
          columns={columnas}
          data={data}
          title="List of Users"
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

export default ListUsers;

