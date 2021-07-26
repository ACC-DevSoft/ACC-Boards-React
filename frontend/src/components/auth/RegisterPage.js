import React, {useState} from 'react';
import { Container, Paper,Card, CardContent, TextField, CardActions, Button, Collapse} from "@material-ui/core";
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import './loginPage.css';

const state = {name: "", username:"", email:"", passwaord:""};
const RegisterPage = () => {

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	function verifyData(state){
		if(state.name === ""){
			alert("campos vacios");
			errorSetter("Please enter your email and password");
		}else{
			alert("campos llenos");
		}
	}

	function errorSetter(state){
		setError(!error);
		setErrorMessage(state);
		setInterval(() => {
      	setError(false);
    	}, 3000);
	}

	return (
		<Container className="container">
			<div className="row">
				<div className="text-home col col-sm-6">
					<h1 className="title">Create an Account!</h1>
					<p>Create an accout and starts working on your boards and groups you are part of.</p>
				</div>
				<div className="col col-sm-6">
					<Paper elevation={3}>
						<Card className="card" variant="outlinedx">
							<h1 className="card-title">Sign Up</h1>
							<CardContent className="cardContent">
								<Collapse in={error}>
								</Collapse>	
								<form>
									<TextField name="nam" label="Name" type="text" fullWidth required/>
									<TextField name="username" label="Username" type="text" fullWidth required/>
									<TextField name="email" label="Email" type="email" fullWidth required/>
									<TextField name="password" label="Password" type="password" fullWidth required/>
								</form>
							</CardContent>
							<div>
								<span>I already have an account. <Link to="/Login">Login</Link> </span>
							</div>
							<CardActions>
								<Button className="btn" variant="contained" onClick={() => verifyData(state)} >Register</Button>
							</CardActions>
						</Card>
					</Paper>
				</div>

			</div>
		</Container>
		
	);
};

export default RegisterPage;
