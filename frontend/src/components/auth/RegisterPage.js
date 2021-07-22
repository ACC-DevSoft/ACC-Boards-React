import React from 'react';
import { Container, Paper,Card, CardContent, TextField, CardActions, Button} from "@material-ui/core";
import './loginPage.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
								<form>
									<TextField label="Name" type="text" fullWidth required/>
									<TextField label="Username" type="text" fullWidth required/>
									<TextField label="Email" type="email" fullWidth required/>
									<TextField label="Password" type="password" fullWidth required/>
								</form>
							</CardContent>
							<div>
								<span>I already have an account. <Link to="/Login">Login</Link> </span>
							</div>
							<CardActions>
								<Button className="btn" variant="contained" >Register</Button>
							</CardActions>
						</Card>
					</Paper>
				</div>

			</div>
		</Container>
		
	);
};

export default RegisterPage;
