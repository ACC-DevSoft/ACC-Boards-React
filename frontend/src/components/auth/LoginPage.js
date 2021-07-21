import React, { useState } from "react";
import { Modal, TextField, Button } from "@material-ui/core";
import "./loginPage.css";

const LoginPage = () => {
  const url = "http://localhost:3000/api/auth/login";
  const fetchLoginApi = async () => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    });
    const data = await response.json();
    return data;
  };
  const [modal, setModal] = useState(false);
  let state = {email: "", password: ""};
  const valueToStateEmail = (email) => {
    state.email = email.value;
    console.log(state);
  }
  const valueToStatePassword = (password) => {
    state.password = password.value;
    console.log(state);
  }
  const abrirModal = () => {
    setModal(!modal);
  };
  const LoginForm = (
    <form >
      <input name="email" type="text" placeholder="email" onChange={event => valueToStateEmail(event.target)}/>
      <input name="email" type="text" placeholder="email" onChange={event => valueToStatePassword(event.target)}/>
      <Button onClick={() => fetchLoginApi()}>Login</Button>
    </form>
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
