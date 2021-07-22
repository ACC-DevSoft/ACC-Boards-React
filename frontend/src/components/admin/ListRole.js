import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Add, DeleteOutline, Edit } from "@material-ui/icons";
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

  const fetchData = async() => {
    await axios
      .get("/role/listRole")
      .then((res) => {
        setData(res.data.roles);
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

      <h4>Total roles: {data.length}</h4>

      <div>
        <MaterialTable className={classes.table}
          columns={columnas}
          data={data}
          title="List of roles"
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

export default ListRole;
