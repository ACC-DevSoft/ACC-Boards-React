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
import "./loginPage.css";
import logo from "../../assets/img/Acc-logo_Purple.png";
import Alert from "@material-ui/lab/Alert";

const state = { email: "", password: "" };

const LoginPage = () => {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchLoginApi(state) {
    await fetch("http://localhost:3025/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("token", json.token);
          setModal(false);
        } else {
          errorSetter(json.message)
        }
      })
      .catch((err) => setErrorMessage("Server error"));
  }

  function verifyData(state) {
    if (state.email === "" || state.password === "") {
      errorSetter("Please enter your email and password");
    } else {
      fetchLoginApi(state);
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

  const valueToStateEmail = (email) => {
    state.email = email.value;
    console.log(state);
  };
  const valueToStatePassword = (password) => {
    state.password = password.value;
    console.log(state);
  };

  const LoginForm = (
    <Card className="element">
      <h1>Login</h1>
      <hr className="spacer"></hr>
      <div className="content-img">
        <img className="Img" src={logo} alt="Acc-Board logo" />
      </div>
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
          name="email"
          type="text"
          placeholder="email"
          onChange={(event) => valueToStateEmail(event.target)}
        />
        <TextField
          name="password"
          type="text"
          placeholder="password"
          onChange={(event) => valueToStatePassword(event.target)}
        />
      </form>
      <div className="mat-dialog-actions">
        <span>
          Create an account{" "}
          <a onClick={() => setModal(false)} href="#">
            Sign Up
          </a>
        </span>
        <Button className="btn" onClick={() => verifyData(state)}>
          Login
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
        Login
      </Button>
    </section>
  );
};

export default LoginPage;
