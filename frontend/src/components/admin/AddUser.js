import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  IconButton,
  Collapse,
  MenuItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import "./AddUser.css";
import Alert from "@material-ui/lab/Alert";

const state = { name: "", userName: "", email: "", password: "", roleId: "" };
let roleList = [];
let severityState = "error";

const AddUser = () => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchRegisterApi(state) {
    await fetch("http://localhost:3025/api/user/registerAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.message) {
          errorSetter("User Register", "success");
        } else {
          errorSetter(json.message);
        }
      })
      .catch((err) => errorSetter(err));
  }

  async function fetchListRoleApi() {
    await fetch("http://localhost:3025/api/role/listRole", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((json) => (roleList = json.roles))
      .catch((err) => setErrorMessage("Server error"));
    abrirModal();
  }

  function verifyData(state) {
    if (
      state.name === "" ||
      state.userName === "" ||
      state.email === "" ||
      state.password === "" ||
      state.email === "" ||
      state.roleId === ""
    ) {
      errorSetter("Incomplete Data");
    } else {
      fetchRegisterApi(state);
    }
  }

  function errorSetter(state, severitymsg) {
    if (severitymsg) {
      severityState = severitymsg;
    }
    setError(!error);
    setErrorMessage(state);
    setInterval(() => {
      setError(false);
      severityState = "error";
      setModal(!modal);
    }, 3000);
  }

  const abrirModal = () => {
    setModal(!modal);
  };

  const valueToStateName = (name) => {
    state.name = name.value;
    console.log(state);
  };
  const valueToStateUserName = (userName) => {
    state.userName = userName.value;
    console.log(state);
  };
  const valueToStateEmail = (email) => {
    state.email = email.value;
    console.log(state);
  };
  const valueToStatePassword = (password) => {
    state.password = password.value;
    console.log(state);
  };
  const valueToStateRole = (role) => {
    state.roleId = role.value;
    console.log(state);
  };

  const AddUserForm = (
    <Card className="element">
      <h1>Register User</h1>
      <hr className="spacer"></hr>
      <Collapse in={error}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={severityState}
        >
          {errorMessage}
        </Alert>
      </Collapse>
      <form className="form-content-inputs">
        <TextField
          className="TextField"
          name="name"
          type="text"
          placeholder="Name"
          onChange={(event) => {
            valueToStateName(event.target);
          }}
        />
        <TextField
          className="TextField"
          name="username"
          type="text"
          placeholder="Username"
          onChange={(event) => valueToStateUserName(event.target)}
        />
        <TextField
          className="TextField"
          name="Email"
          type="text"
          placeholder="Email"
          onChange={(event) => valueToStateEmail(event.target)}
        />
        <TextField
          className="TextField"
          name="password"
          type="text"
          placeholder="Password"
          onChange={(event) => valueToStatePassword(event.target)}
        />
        <TextField
          className="TextField"
          name="RoleId"
          type="text"
          label="Role"
          select
          onChange={(event) => valueToStateRole(event.target)}
        >
          {roleList.map((role, i) => (
            <MenuItem key={i} value={role._id}>
              {role.name}
            </MenuItem>
          ))}
        </TextField>
      </form>
      <div className="mat-dialog-actions">
        <Button className="btn gray" onClick={() => setModal(!modal)}>
          Cancel
        </Button>
        <Button className="btn" onClick={() => verifyData(state)}>
          Register
        </Button>
      </div>
    </Card>
  );

  return (
    <section>
      <Modal open={modal} onClose={() => setModal(false)}>
        {AddUserForm}
      </Modal>
      <Button
        className={"width: '100%' , marginTop: '10px'"}
        onClick={() => {
          fetchListRoleApi();
        }}
      >
        Add User
      </Button>
    </section>
  );
};

export default AddUser;
