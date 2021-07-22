import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  IconButton,
  Collapse,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import "./AddUser.css";
import Alert from "@material-ui/lab/Alert";

const state = { name: "", userName: "", email: "", password: "", roleId: "" };

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
        if (json.token) {
          localStorage.setItem("token", json.token);
          setModal(false);
        } else {
          errorSetter(json.message);
        }
      })
      .catch((err) => setErrorMessage("Server error"));
  }

  async function fetchListRoleApi() {
    let roleList = [];
    await fetch("http://localhost:3025/api/user/registerAdmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((json) => (roleList = json.roles))
      .catch((err) => setErrorMessage("Server error"));
    return roleList;
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

  function errorSetter(state) {
    setError(!error);
    setErrorMessage(state);
    setInterval(() => {
      setError(false);
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

  const LoginForm = (
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
          severity="error"
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
          onChange={(event) => valueToStateName(event.target)}
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
          placeholder="Role"
          onChange={(event) => valueToStateRole(event.target)}
        />
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
        {LoginForm}
      </Modal>
      <Button
        className={"width: '100%' , marginTop: '10px'"}
        onClick={() => abrirModal()}
      >
        Add User
      </Button>
    </section>
  );
};

export default AddUser;
