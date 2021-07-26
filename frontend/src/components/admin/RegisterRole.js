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
import "./RegisterRole.css";
import Alert from "@material-ui/lab/Alert";

const state = { name: "", description: "" };
let severityState = "error";

const RegisterRole = () => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchRegisterRoleApi(state) {
    await fetch("http://localhost:3025/api/role/registerRole", {
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
          errorSetter("Role Register", "success");
        } else {
          errorSetter(json.message);
        }
      })
      .catch((err) => errorSetter(err));
  }

  function verifyData(state) {
    if (state.name === "" || state.description === "") {
      errorSetter("Incomplete Data");
    } else {
      fetchRegisterRoleApi(state);
    }
  }

  function errorSetter(state, severitymsg) {
    if (severitymsg) {
      severityState = severitymsg;
    }
    setError(!error);
    setErrorMessage(state);
    setTimeout(() => {
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
  const valueToStateDescription = (description) => {
    state.description = description.value;
    console.log(state);
  };

  const RoleForm = (
    <Card className="element">
      <h1>Register Role</h1>
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
          name="description"
          type="text"
          placeholder="Description"
          onChange={(event) => valueToStateDescription(event.target)}
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
        {RoleForm}
      </Modal>
      <Button
        className={"width: '100%' , marginTop: '10px'"}
        onClick={() => {
          abrirModal();
        }}
      >
        + Register Role
      </Button>
    </section>
  );
};

export default RegisterRole;
