import React, { useState } from "react";
import { Modal, TextField, Button } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import "./loginPage.css";
import logo from "../../assets/img/Acc-logo_Purple.png";

async function fetchLoginApi(state) {
  const data = await fetch("http://localhost:3025/api/auth/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(state),
    }).then(response => response.json()).then(json => {console.log(json)}).catch(err => {return err});
};

const LoginPage = () => {

  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(!modal);
  };

  const state = {email: "", password: ""};

  const valueToStateEmail = (email) => {
    state.email = email.value;
    console.log(state);
  }
  const valueToStatePassword = (password) => {
    state.password = password.value;
    console.log(state); 
  }

  const LoginForm = (
    <Card className="element">
      <h1>Login</h1>
      <hr className="spacer"></hr>
      <div className="content-img">
        <img className="Img" src={logo}/>
      </div>
      <form className="form-content-inputs">
        <TextField name="email" type="text" placeholder="email" onChange={event => valueToStateEmail(event.target)}/>
        <TextField name="password" type="text" placeholder="password" onChange={event => valueToStatePassword(event.target)}/>
      </form>
      <div className="mat-dialog-actions">
        <span>Create an account <a onClick={() => setModal(false)} href="#">Sign Up</a></span>
        <Button className="btn" onClick={() => fetchLoginApi(state)}>Login</Button>
      </div>
    </Card >
    
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
