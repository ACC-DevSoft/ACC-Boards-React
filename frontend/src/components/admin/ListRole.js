import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Add, Delete, Edit } from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import useStyles from "./styleListRole";
//import useAxios from "../../hook";

axios.defaults.baseURL = "http://localhost:3025/api";

const ListRole = () => {
  const classes = useStyles();

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("/role/listRole")
      .then((res) => {
        setResponse(res.data);
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


  useEffect(() => {
    fetchData();
  }, [data]);

  console.log(data.length)

  return (
    <Container className={classes.container}>
      <Card>
        <h2>Roles</h2>
        <hr />

        <h3>
          Total roles: <span>{data.status}</span>
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
            <tr className={classes.tr}>
              <td className={classes.td}>Admin</td>
              <td className={classes.td}>Plataform admin</td>
              <td className={classes.td}>Active</td>
              <td className={classes.td}>
                <Button>
                  <Edit /> edit
                </Button>
                <Button>
                  <Delete /> delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Container>
  );
};

export default ListRole;
