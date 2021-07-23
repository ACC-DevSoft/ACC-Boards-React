import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Add, DeleteOutline, Edit, ZoomOutMapSharp } from "@material-ui/icons";
import MaterialTable from "material-table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import useStyles from "./styleListRole";

axios.defaults.baseURL = "http://localhost:3025/api";

// const columnas = [
//   {
//     title: "Name",
//     field: "name",
//   },
//   {
//     title: "Description",
//     field: "description",
//   },
//   {
//     title: "Status",
//     field: "status",
//   },
//   {
//     title: "Creation Date",
//     field: "date",
//   },
// ];

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
        console.log(res.data)
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
    // <>
    //   <hr></hr>

    //   <h4>Total roles: {data.length}</h4>

    //   <div>
    //     <MaterialTable className={classes.table}
    //       columns={columnas}
    //       data={data}
    //       title="List of roles"
    //       actions={[
    //         {
    //           icon: Edit,
    //           tooltip: "Edit Role",
    //           onClick: (event, rowData) =>
    //             alert("You want to edit the user: " + rowData.name),
    //         },
    //         {
    //           icon: DeleteOutline,
    //           tooltip: "Delete Role",
    //           onClick: (event, rowData) =>
    //             window.confirm(
    //               "Are you sure tou want Delete de Role: " + rowData.name
    //             ),
    //         },
    //       ]}
    //       options={{
    //         actionsColumnIndex: -1,
    //       }}
    //     />
    //   </div>
    // </>

    <Container className={classes.container}>
      <Card>
        <h2>Roles</h2>
        <hr />

        <h3>
          Total roles: <span>{data.length}</span>
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
              <td className={classes.td}>[z]</td>
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
          </tbody>
        </table>
      </Card>
    </Container>
  );
};

export default ListRole;
