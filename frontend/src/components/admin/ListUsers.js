import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import axios from "axios";
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

  return (
    <>
      <hr></hr>

      <h4>Total Users: {data.length}</h4>

      <div>
        <MaterialTable className={classes.table}
          columns={columnas}
          data={data}
          title="Users"
          actions={[
            {
              icon: Edit,
              tooltip: "Edit User",
              onClick: (event, rowData) =>
                alert("You want to edit the user: " + rowData.name),
            },
            {
              icon: DeleteOutline,
              tooltip: "Delete User",
              onClick: (event, rowData) =>
                window.confirm(
                  "Are you sure tou want Delete de User: " + rowData.name
                ),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </>
  );
};

export default ListUsers;

