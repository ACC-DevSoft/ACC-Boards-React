import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import axios from "axios";

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
    field: "role",
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

const data1 = [
  {
    name: "Pepe",
    email: "pepe@gmail.com",
    role: "Admin",
    status: "active",
    date: "jun 25 2021",
  },
  {
    name: "Pepa",
    email: "pepe@gmail.com",
    role: "Admin",
    status: "active",
    date: "feb 25 2021",
  },
  {
    name: "Pepe",
    email: "pepe@gmail.com",
    role: "Admin",
    status: "active",
    date: "apr 25 2021",
  },
  {
    name: "Pepita",
    email: "pepe@gmail.com",
    role: "Admin",
    status: "active",
    date: "feb 25 2021",
  },
  {
    name: "Pepe",
    email: "pepe@gmail.com",
    role: "Admin",
    status: "active",
    date: "feb 25 2021",
  },
  {
    name: "Pepis",
    email: "pepe@gmail.com",
    role: "Admin",
    status: "active",
    date: "mar 25 2021",
  },
  {
    name: "Pepe",
    email: "pepe@gmail.com",
    role: "Admin",
    status: "active",
    date: "feb 25 2021",
  },
];

axios.defaults.baseURL = "http://localhost:3025/api";

const ListUsers = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
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

  useEffect(() => {
    fetchData();
  }, [response]);

  return (
    <>
      <hr></hr>

      <h4>Total Users: {data.length}</h4>

      <div>
        <MaterialTable
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
