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
import "./AddWorkSpaces.css";
import Alert from "@material-ui/lab/Alert";

const state = { name: "", description: "", members: [], boards: [] };
let severityState = "error";

const AddWorkSpaces = ({id}) => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchAddWorkSpaceApi(state) {
    await fetch(`http://localhost:3025/api/workspace/newWorkSpace/${id}`, {
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
          localStorage.setItem("currentW", json.result._id);
          errorSetter("Workspace Register", "success");
		      console.log(json.result._id);
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
		fetchAddWorkSpaceApi(state);
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
      setModal(false);
    }, 3000);
  }

  const abrirModal = () => {
    setModal(true);
  };

  const valueToStateName = (name) => {
    state.name = name.value;
    console.log(state);
  };
  const valueToStateDescription = (description) => {
    state.description = description.value;
    console.log(state);
  };

  const WorkspaceForm = (
    <Card className="element">
      <h1>Add Workspace</h1>
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
        <Button className="btn gray" onClick={() => setModal(false)}>
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
        {WorkspaceForm}
      </Modal>
      <Button
        className="btn-purple"  
        variant="contained" 
        color="primary"
        onClick={() => {
          abrirModal();
        }}
      >
        Add Workspace
      </Button>
    </section>
  );
};

export default AddWorkSpaces;
