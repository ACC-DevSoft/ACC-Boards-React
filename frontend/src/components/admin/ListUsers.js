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
    <Container className={classes.container}>
      <Card>
        <h2>Users</h2>
        <hr />

        <h3>
          Total Users: <span>{data.length}</span>
        </h3>

        <Button>
          <Add aria-hidden="false" color="accent" /> Add role
        </Button>

        <table className={classes.table}>
          <thead className={classes.head}>
            <tr className={classes.tr}>
              <th className={classes.th}>Name</th>
              <th className={classes.th}>Description</th>
              <th className={classes.th}>Status</th>
              <th className={classes.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => {
              <tr className={classes.tr}>
              <td className={classes.td}>{user.name}</td>
              <td className={classes.td}>Plataform admin</td>
              <td className={classes.td}>Active</td>
              <td className={classes.td}>
                <Button>
                  <Edit /> edit
                </Button>
                <Button>
                  <DeleteOutline /> delete
                </Button>
              </td>
            </tr>
            })}
          </tbody>
        </table>
      </Card>
    </Container>
  );
};

export default ListUsers;

